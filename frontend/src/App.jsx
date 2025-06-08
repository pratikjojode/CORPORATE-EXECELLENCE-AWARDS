import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Admin/Dashboard";
import Nomination from "./Admin/Nomination";
import Attendance from "./Admin/Attendance";
import "./App.css";
import "./index.css";
import SponsorshipDetails from "./Pages/SponsorshipDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sponsors" element={<SponsorshipDetails />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Dashboard />}>
          <Route index element={<h2>Welcome to the Admin Dashboard</h2>} />
          <Route path="nominations" element={<Nomination />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
