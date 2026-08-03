import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <h2 className="dashboard-title">Welcome <strong>Admin</strong>!</h2>
        <p>Have a nice day.</p>
        <div className="dashboard-grid">
          <DashboardCard icon="/src/Images/Passengers.png" title="View All Passengers" />
          <DashboardCard icon="/src//Images/Financial.png" title="Financial Report" />
          <DashboardCard icon="/src//Images/Passengers.png" title="Passenger per Station" />
          <DashboardCard icon="/src//Images/Search.png" title="Search Passenger" />
          <DashboardCard icon="/src//Images/Analytics.png" title="Analytics" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
