import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import "../Styles/Attendance.css";

const ITEMS_PER_PAGE = 5;

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filterValue, setFilterValue] = useState("");
  const [designationFilter, setDesignationFilter] = useState("");
  const [organisationFilter, setOrganisationFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const [viewMode, setViewMode] = useState("table");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/v1/attendance/attendanceResponse")
      .then((response) => {
        setAttendanceData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load attendance data");
        setLoading(false);
      });
  }, []);

  const uniqueDesignations = Array.from(
    new Set(
      attendanceData.map((item) => item["Designation"] || "").filter(Boolean)
    )
  );
  const uniqueOrganisations = Array.from(
    new Set(
      attendanceData.map((item) => item["Organisation"] || "").filter(Boolean)
    )
  );
  const uniqueLocations = Array.from(
    new Set(
      attendanceData.map((item) => item["Location"] || "").filter(Boolean)
    )
  );

  useEffect(() => {
    let filtered = attendanceData;

    if (filterValue) {
      const val = filterValue.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item["Full Name"].toLowerCase().includes(val) ||
          item["Official Email ID"].toLowerCase().includes(val) ||
          item["Designation"].toLowerCase().includes(val) ||
          item["Location"].toLowerCase().includes(val)
      );
    }

    if (designationFilter) {
      filtered = filtered.filter(
        (item) => item["Designation"] === designationFilter
      );
    }
    if (organisationFilter) {
      filtered = filtered.filter(
        (item) => item["Organisation"] === organisationFilter
      );
    }
    if (locationFilter) {
      filtered = filtered.filter((item) => item["Location"] === locationFilter);
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [
    filterValue,
    designationFilter,
    organisationFilter,
    locationFilter,
    attendanceData,
  ]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const exportToExcel = () => {
    const exportData = filteredData.map((item) => ({
      Timestamp: item["Timestamp"],
      "Full Name": item["Full Name"],
      "Official Email ID": item["Official Email ID"],
      "Contact Number": item["Contact Number"],
      Designation: item["Designation"],
      Organisation: item["Organisation"],
      "LinkedIn Profile URL": item["LinkedIn Profile URL"],
      Location: item["Location"],
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");
    XLSX.writeFile(workbook, "attendance_data.xlsx");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const shareOnWhatsApp = (item) => {
    const message = `Hey! Here's the attendance detail:\n\nName: ${item["Full Name"]}\nEmail: ${item["Official Email ID"]}\nContact: ${item["Contact Number"]}\nDesignation: ${item["Designation"]}\nOrganisation: ${item["Organisation"]}\nLocation: ${item["Location"]}\nLinkedIn: ${item["LinkedIn Profile URL"]}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (loading) return <p>Loading attendance data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="attendance-container">
      <h2>Attendance Page</h2>

      <input
        type="text"
        className="filter-input"
        placeholder="Search by name, email, designation, location..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />

      <div className="filter-dropdowns">
        <select
          value={designationFilter}
          onChange={(e) => setDesignationFilter(e.target.value)}
        >
          <option value="">All Designations</option>
          {uniqueDesignations.map((desig, i) => (
            <option key={i} value={desig}>
              {desig}
            </option>
          ))}
        </select>

        <select
          value={organisationFilter}
          onChange={(e) => setOrganisationFilter(e.target.value)}
        >
          <option value="">All Organisations</option>
          {uniqueOrganisations.map((org, i) => (
            <option key={i} value={org}>
              {org}
            </option>
          ))}
        </select>

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="view-toggle-buttons">
        <button
          onClick={() => setViewMode("table")}
          className={viewMode === "table" ? "active" : ""}
        >
          Table View
        </button>
        <button
          onClick={() => setViewMode("grid")}
          className={viewMode === "grid" ? "active" : ""}
        >
          Grid View
        </button>
      </div>

      <div style={{ margin: "10px 0" }}>
        <button onClick={exportToExcel}>Export to Excel</button>
      </div>

      <div className="total-count">
        Total Attendance Records: <strong>{filteredData.length}</strong>
      </div>

      {viewMode === "table" && (
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Full Name</th>
              <th>Official Email ID</th>
              <th>Contact Number</th>
              <th>Designation</th>
              <th>Organisation</th>
              <th>LinkedIn</th>
              <th>Location</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index}>
                <td>{item["Timestamp"]}</td>
                <td>{item["Full Name"]}</td>
                <td>{item["Official Email ID"]}</td>
                <td>{item["Contact Number"]}</td>
                <td>{item["Designation"]}</td>
                <td>{item["Organisation"]}</td>
                <td>
                  <a
                    href={item["LinkedIn Profile URL"]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </td>
                <td>{item["Location"]}</td>
                <td>
                  <button onClick={() => openModal(item)}>👁️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {viewMode === "grid" && (
        <div className="grid-container">
          {paginatedData.map((item, index) => (
            <div className="grid-item" key={index}>
              <h3>{item["Full Name"]}</h3>
              <p>
                <strong>Timestamp:</strong> {item["Timestamp"]}
              </p>
              <p>
                <strong>Email:</strong> {item["Official Email ID"]}
              </p>
              <p>
                <strong>Contact:</strong> {item["Contact Number"]}
              </p>
              <p>
                <strong>Designation:</strong> {item["Designation"]}
              </p>
              <p>
                <strong>Organisation:</strong> {item["Organisation"]}
              </p>
              <p>
                <strong>Location:</strong> {item["Location"]}
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={item["LinkedIn Profile URL"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="pagination-controls">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              className={currentPage === pageNum ? "active" : ""}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {isModalOpen && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Attendance Detail</h3>
            <p>
              <strong>Full Name:</strong> {selectedItem["Full Name"]}
            </p>
            <p>
              <strong>Email:</strong> {selectedItem["Official Email ID"]}
            </p>
            <p>
              <strong>Contact:</strong> {selectedItem["Contact Number"]}
            </p>
            <p>
              <strong>Designation:</strong> {selectedItem["Designation"]}
            </p>
            <p>
              <strong>Organisation:</strong> {selectedItem["Organisation"]}
            </p>
            <p>
              <strong>Location:</strong> {selectedItem["Location"]}
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={selectedItem["LinkedIn Profile URL"]}
                target="_blank"
                rel="noreferrer"
              >
                Profile
              </a>
            </p>
            <button onClick={() => shareOnWhatsApp(selectedItem)}>
              📤 Share on WhatsApp
            </button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
