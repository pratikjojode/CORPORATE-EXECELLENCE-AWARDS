import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/adminLogin");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h2 className="awards">Corporate Excellence Awards</h2>
        <nav>
          <ul>
            <li>
              <button
                className={
                  isActive("/admin-dashboard/nominations") ? "active" : ""
                }
                onClick={() => {
                  navigate("/admin-dashboard/nominations");
                  setIsSidebarOpen(false);
                }}
              >
                Nomination
              </button>
            </li>
            <li>
              <button
                className={
                  isActive("/admin-dashboard/attendance") ? "active" : ""
                }
                onClick={() => {
                  navigate("/admin-dashboard/attendance");
                  setIsSidebarOpen(false);
                }}
              >
                Attendance
              </button>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </aside>

      <main className="main-content">
        <div className="header-bar">
          <button className="hamburger-menu" onClick={toggleSidebar}>
            ☰
          </button>
          <h1 className="main-header-title"> Jobizza Admin Dashboard</h1>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
