import React from "react";
import "../Styles/DashboardFooter.css";
const DashboardFooter = () => {
  return (
    <footer className="dashboard-footer">
      <p>
        &copy; {new Date().getFullYear()} Corporate Excellence Awards. All
        rights reserved.
      </p>
      <p>Powered by Jobizza</p>
    </footer>
  );
};

export default DashboardFooter;
