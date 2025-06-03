import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import "../Styles/Nomination.css";

const headers = [
  "Timestamp",
  "Full Name of Nominee",
  "Designation (if individual) ",
  "Organization Name (if individual) ",
  "Industry Sector",
  "Official Email ID ",
  "Contact Number ",
  "Company Website / LinkedIn URL ",
  "Location",
  "Individual / HR Awards",
  "Corporate / Organizational Awards",
  "Provide a 300-500 word description for each selected category",
  "Supporting Documents (Optional but Recommended)",
  "Declaration",
];

// Helper: Smart truncation based on field type and view
const smartTruncate = (content, fieldName, viewType = "table") => {
  if (typeof content !== "string") return content || "N/A";

  const limits = {
    table: {
      description: 50,
      declaration: 30,
      awards: 40,
      default: 35,
    },
    grid: {
      description: 100,
      declaration: 60,
      awards: 80,
      default: 70,
    },
    modal: {
      description: Infinity,
      declaration: Infinity,
      awards: Infinity,
      default: Infinity,
    },
  };

  let limit;
  if (fieldName.includes("description")) {
    limit = limits[viewType].description;
  } else if (fieldName.includes("Declaration")) {
    limit = limits[viewType].declaration;
  } else if (fieldName.includes("Awards")) {
    limit = limits[viewType].awards;
  } else {
    limit = limits[viewType].default;
  }

  if (content.length <= limit) return content;
  return content.slice(0, limit - 3) + "...";
};

// Helper: Format URL to ensure it has proper protocol
const formatUrl = (url) => {
  if (!url || typeof url !== "string") return null;

  const cleanUrl = url.trim();
  if (!cleanUrl) return null;

  // If URL already has a protocol, return as is
  if (cleanUrl.match(/^https?:\/\//i)) {
    return cleanUrl;
  }

  // If URL starts with www, add https
  if (cleanUrl.match(/^www\./i)) {
    return `https://${cleanUrl}`;
  }

  // If it looks like a domain (contains a dot and no spaces), add https
  if (cleanUrl.includes(".") && !cleanUrl.includes(" ")) {
    return `https://${cleanUrl}`;
  }

  // Otherwise, return null (invalid URL)
  return null;
};

const PAGE_SIZE = 10; // Number of nominations per page

const Nomination = () => {
  const [nominationData, setNominationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("table");
  const [selectedNominee, setSelectedNominee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [exporting, setExporting] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Filter states
  const [industryFilter, setIndustryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [awardsTypeFilter, setAwardsTypeFilter] = useState("");
  const [designationFilter, setDesignationFilter] = useState("");
  const [organizationFilter, setOrganizationFilter] = useState("");

  useEffect(() => {
    const fetchNomination = async () => {
      try {
        const response = await axios.get("/api/v1/form/corporateFormResponse");
        setNominationData(response.data);
      } catch (err) {
        console.error("Error fetching nomination data:", err);
        setError("Failed to load nomination data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNomination();
  }, []);

  // Get unique values for filters
  const industryOptions = [
    ...new Set(nominationData.map((n) => n["Industry Sector"]).filter(Boolean)),
  ];
  const locationOptions = [
    ...new Set(nominationData.map((n) => n["Location"]).filter(Boolean)),
  ];
  const designationOptions = [
    ...new Set(
      nominationData
        .map((n) => n["Designation (if individual) "])
        .filter(Boolean)
    ),
  ];
  const organizationOptions = [
    ...new Set(
      nominationData
        .map((n) => n["Organization Name (if individual) "])
        .filter(Boolean)
    ),
  ];

  // Dynamic awards type options based on actual data
  const getAwardsTypeOptions = () => {
    const options = [];
    const hasIndividualAwards = nominationData.some(
      (n) =>
        n["Individual / HR Awards"] && n["Individual / HR Awards"].trim() !== ""
    );
    const hasCorporateAwards = nominationData.some(
      (n) =>
        n["Corporate / Organizational Awards"] &&
        n["Corporate / Organizational Awards"].trim() !== ""
    );

    if (hasIndividualAwards) options.push("Individual");
    if (hasCorporateAwards) options.push("Corporate");

    return options;
  };

  const awardsTypeOptions = getAwardsTypeOptions();

  // Filtering logic
  const filteredData = nominationData.filter((nominee) => {
    const industryMatch =
      !industryFilter || nominee["Industry Sector"] === industryFilter;
    const locationMatch =
      !locationFilter || nominee["Location"] === locationFilter;
    const designationMatch =
      !designationFilter ||
      nominee["Designation (if individual) "] === designationFilter;
    const organizationMatch =
      !organizationFilter ||
      nominee["Organization Name (if individual) "] === organizationFilter;

    let awardsMatch = true;
    if (awardsTypeFilter === "Individual") {
      awardsMatch =
        nominee["Individual / HR Awards"] &&
        nominee["Individual / HR Awards"].trim() !== "";
    } else if (awardsTypeFilter === "Corporate") {
      awardsMatch =
        nominee["Corporate / Organizational Awards"] &&
        nominee["Corporate / Organizational Awards"].trim() !== "";
    }

    return (
      industryMatch &&
      locationMatch &&
      designationMatch &&
      organizationMatch &&
      awardsMatch
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Reset to page 1 if current page exceeds total pages after filtering
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [filteredData.length, totalPages, currentPage]);

  const openModal = (nominee) => {
    setSelectedNominee(nominee);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNominee(null);
  };

  // WhatsApp share helpers
  const getNomineeShareText = (nominee) => {
    const name = nominee["Full Name of Nominee"] || "Nominee";
    const websiteUrl = formatUrl(nominee["Company Website / LinkedIn URL "]);
    const link = websiteUrl || window.location.href;
    return `Check out this nominee: ${name}\n${link}`;
  };

  const shareToWhatsApp = (nominee) => {
    const text = encodeURIComponent(getNomineeShareText(nominee));
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  // Excel export function (exports all, not just current page)
  const exportToExcel = () => {
    if (filteredData.length === 0) {
      alert("No data available to export.");
      return;
    }

    setExporting(true);

    try {
      const exportData = filteredData.map((nominee, index) => {
        const row = {};
        row["Sr. No."] = index + 1;
        headers.forEach((header) => {
          let value = nominee[header] || "N/A";
          if (
            header === "Company Website / LinkedIn URL " ||
            header === "Supporting Documents (Optional but Recommended)"
          ) {
            value = value || "N/A";
          }
          if (typeof value === "string") {
            value = value.trim().replace(/\s+/g, " ");
          }
          row[header] = value;
        });
        return row;
      });

      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(exportData);

      const columnWidths = [
        { wch: 8 }, // Sr. No.
        { wch: 15 }, // Timestamp
        { wch: 20 }, // Full Name
        { wch: 20 }, // Designation
        { wch: 25 }, // Organization Name
        { wch: 20 }, // Industry Sector
        { wch: 25 }, // Email
        { wch: 15 }, // Contact Number
        { wch: 30 }, // Website/LinkedIn
        { wch: 15 }, // Location
        { wch: 25 }, // Individual Awards
        { wch: 25 }, // Corporate Awards
        { wch: 50 }, // Description
        { wch: 30 }, // Supporting Documents
        { wch: 15 }, // Declaration
      ];

      worksheet["!cols"] = columnWidths;

      // Header style
      const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "2563EB" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } },
        },
      };
      const range = XLSX.utils.decode_range(worksheet["!ref"]);
      for (let col = range.s.c; col <= range.e.c; col++) {
        const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
        if (!worksheet[cellAddress]) continue;
        worksheet[cellAddress].s = headerStyle;
      }

      XLSX.utils.book_append_sheet(workbook, worksheet, "Nominations");

      const currentDate = new Date();
      const dateString = currentDate.toISOString().split("T")[0];
      const timeString = currentDate
        .toTimeString()
        .split(" ")[0]
        .replace(/:/g, "-");
      const filename = `Nominations_Export_${dateString}_${timeString}.xlsx`;

      XLSX.writeFile(workbook, filename);

      setTimeout(() => {
        alert(`Excel file "${filename}" has been downloaded successfully!`);
      }, 500);
    } catch (error) {
      console.error("Error exporting to Excel:", error);
      alert("Failed to export data to Excel. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  // Render URL as link or text
  const renderUrl = (url, linkText = "Visit Link") => {
    const formattedUrl = formatUrl(url);
    if (formattedUrl) {
      return (
        <a
          href={formattedUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            // Additional safety check
            if (!formattedUrl.match(/^https?:\/\//i)) {
              e.preventDefault();
              alert("Invalid URL format");
            }
          }}
        >
          {linkText}
        </a>
      );
    }
    return url || "N/A";
  };

  // Render cell content with appropriate truncation
  const renderCellContent = (
    content,
    header,
    viewType = "table",
    fullContent = null
  ) => {
    if (header === "Company Website / LinkedIn URL ") {
      return renderUrl(content, "Visit Website");
    } else if (header === "Supporting Documents (Optional but Recommended)") {
      return renderUrl(content, "View Documents");
    }

    const truncatedContent = smartTruncate(content, header, viewType);
    const originalContent = fullContent || content;

    if (truncatedContent !== originalContent && originalContent) {
      return (
        <span title={originalContent} className="truncated-content">
          {truncatedContent}
        </span>
      );
    }

    return truncatedContent || "N/A";
  };

  // Table and grid view header with export button
  const viewToggle = (
    <div className="view-toggle-row">
      <div className="view-buttons">
        <button
          className={`view-toggle-btn${viewMode === "table" ? " active" : ""}`}
          onClick={() => setViewMode("table")}
        >
          Table View
        </button>
        <button
          className={`view-toggle-btn${viewMode === "grid" ? " active" : ""}`}
          onClick={() => setViewMode("grid")}
        >
          Grid View
        </button>
      </div>
      <button
        className="excel-export-btn"
        onClick={exportToExcel}
        disabled={exporting || filteredData.length === 0}
        title="Export all nominations to Excel"
      >
        {exporting ? (
          <>
            <span className="export-spinner"></span>
            Exporting...
          </>
        ) : (
          <>
            <span className="excel-icon">📊</span>
            Export to Excel
          </>
        )}
      </button>
    </div>
  );

  // Filter UI
  const filterRow = (
    <div className="filter-row">
      <div className="filter-group">
        <label>Industry Sector:</label>
        <select
          value={industryFilter}
          onChange={(e) => {
            setIndustryFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Industries</option>
          {industryOptions.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Location:</label>
        <select
          value={locationFilter}
          onChange={(e) => {
            setLocationFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Locations</option>
          {locationOptions.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Designation:</label>
        <select
          value={designationFilter}
          onChange={(e) => {
            setDesignationFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Designations</option>
          {designationOptions.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Organization:</label>
        <select
          value={organizationFilter}
          onChange={(e) => {
            setOrganizationFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Organizations</option>
          {organizationOptions.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Awards Type:</label>
        <select
          value={awardsTypeFilter}
          onChange={(e) => {
            setAwardsTypeFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Awards</option>
          {awardsTypeOptions.map((opt, i) => (
            <option key={i} value={opt}>
              {opt === "Individual"
                ? "Individual / HR Awards"
                : "Corporate / Organizational Awards"}
            </option>
          ))}
        </select>
      </div>

      {(industryFilter ||
        locationFilter ||
        designationFilter ||
        organizationFilter ||
        awardsTypeFilter) && (
        <button
          className="clear-filters-btn"
          onClick={() => {
            setIndustryFilter("");
            setLocationFilter("");
            setDesignationFilter("");
            setOrganizationFilter("");
            setAwardsTypeFilter("");
            setCurrentPage(1);
          }}
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  // Pagination controls
  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getPages = () => {
      const maxDisplay = 5;
      let start = Math.max(1, currentPage - Math.floor(maxDisplay / 2));
      let end = start + maxDisplay - 1;
      if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, end - maxDisplay + 1);
      }
      const pages = [];
      for (let i = start; i <= end; i++) pages.push(i);
      return pages;
    };

    return (
      <div className="pagination-row">
        <div className="pagination-info">
          Showing {(currentPage - 1) * PAGE_SIZE + 1} to{" "}
          {Math.min(currentPage * PAGE_SIZE, filteredData.length)} of{" "}
          {filteredData.length} entries
        </div>
        <div className="pagination-controls">
          <button
            className="pagination-btn"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            ⏮ First
          </button>
          <button
            className="pagination-btn"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ◀ Prev
          </button>
          {getPages().map((page) => (
            <button
              key={page}
              className={`pagination-btn${
                page === currentPage ? " active" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-btn"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
          <button
            className="pagination-btn"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last ⏭
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="nomination-container">
        <h2>Nomination Page</h2>
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading nomination details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="nomination-container">
        <h2>Nomination Page</h2>
        <p className="error-message">{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (nominationData.length === 0) {
    return (
      <div className="nomination-container">
        <h2>Nomination Page</h2>
        <div className="no-data-message">
          <span className="no-data-icon">📄</span>
          <p>No nomination data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="nomination-container">
      <div className="header-row">
        <h2>Nomination Details</h2>
        {viewToggle}
      </div>
      {filterRow}
      <div className="stats-row">
        <p>
          Total Nominations:{" "}
          <span className="stats-number">{filteredData.length}</span>
          {filteredData.length !== nominationData.length && (
            <span className="filter-indicator">
              {" "}
              (filtered from {nominationData.length})
            </span>
          )}
        </p>
        <p className="export-info">
          Click "Export to Excel" to download all nomination data
        </p>
      </div>

      {filteredData.length === 0 ? (
        <div className="no-data-message">
          <span className="no-data-icon">🔍</span>
          <p>No nominations match the current filters.</p>
          <button
            className="clear-filters-btn"
            onClick={() => {
              setIndustryFilter("");
              setLocationFilter("");
              setAwardsTypeFilter("");
              setCurrentPage(1);
            }}
          >
            Clear All Filters
          </button>
        </div>
      ) : viewMode === "table" ? (
        <>
          <div className="table-responsive">
            <table className="nomination-table horizontal-headers">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((nominee, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="serial-number">
                      {(currentPage - 1) * PAGE_SIZE + rowIndex + 1}
                    </td>
                    {headers.map((header, colIndex) => (
                      <td key={colIndex}>
                        {renderCellContent(nominee[header], header, "table")}
                      </td>
                    ))}
                    <td>
                      <button
                        className="view-btn"
                        onClick={() => openModal(nominee)}
                      >
                        View
                      </button>
                      <button
                        className="whatsapp-btn"
                        title="Share to WhatsApp"
                        onClick={() => shareToWhatsApp(nominee)}
                        style={{ marginLeft: 8 }}
                      >
                        🟢 WhatsApp
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        // Grid view for mobile / alternative
        <>
          <div className="grid-list">
            {paginatedData.map((nominee, idx) => (
              <div className="nominee-card" key={idx}>
                <div className="card-header">
                  <span className="card-number">
                    #{(currentPage - 1) * PAGE_SIZE + idx + 1}
                  </span>
                  <span className="card-title">
                    {nominee["Full Name of Nominee"] || "Unknown Nominee"}
                  </span>
                </div>
                <div className="card-content">
                  {headers.map((header, i) => (
                    <div className="card-row" key={i}>
                      <span className="card-label">{header}:</span>
                      <span className="card-value">
                        {renderCellContent(nominee[header], header, "grid")}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="card-actions">
                  <button
                    className="view-btn"
                    onClick={() => openModal(nominee)}
                  >
                    View Details
                  </button>
                  <button
                    className="whatsapp-btn"
                    title="Share to WhatsApp"
                    onClick={() => shareToWhatsApp(nominee)}
                    style={{ marginLeft: 8 }}
                  >
                    🟢 WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      {/* Modal */}
      {modalOpen && selectedNominee && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="nominee-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h3>
              Nominee Details
              <span className="modal-subtitle">
                {selectedNominee["Full Name of Nominee"] || "Unknown Nominee"}
              </span>
            </h3>
            <div className="modal-content">
              {headers.map((header, i) => (
                <div className="modal-row" key={i}>
                  <span className="modal-label">{header}:</span>
                  <span className="modal-value">
                    {renderCellContent(
                      selectedNominee[header],
                      header,
                      "modal"
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nomination;
