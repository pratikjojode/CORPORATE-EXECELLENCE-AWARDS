import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import "../Styles/Dashboard.css";
import logo from "../assets/corporate2.jpg";
import DashboardFooter from "./DashboardFooter";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/adminLogin");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname.startsWith(path);

  const formatTime = (dateToFormat) => {
    return dateToFormat.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      <div className="dashboard-container">
        <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <img
            className="logo-admin"
            src={logo}
            alt="Corporate Excellence Awards Logo"
          />
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
                  Nomination Data
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
                  Attendance Data
                </button>
              </li>
              <li>
                <button
                  className={isActive("/home") ? "active" : ""}
                  onClick={() => {
                    navigate("/");
                    setIsSidebarOpen(false);
                  }}
                >
                  Website Home Page
                </button>
              </li>
            </ul>
          </nav>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
          <div className="developer-names">
            <p>Developed by: **Pratik Jojode**</p>
            <p>Co-developed by: **Sanskar Tolumbia**</p>
          </div>
        </aside>

        <main className="main-content">
          <div className="header-bar">
            <button className="hamburger-menu" onClick={toggleSidebar}>
              ☰
            </button>

            <div className="header-title-and-time">
              <h1 className="main-header-title">
                Jobizza Admin Dashboard || {formatTime(currentTime)}
              </h1>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
