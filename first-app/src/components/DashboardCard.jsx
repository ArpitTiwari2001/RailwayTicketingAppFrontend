import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ icon, title }) => {
  return (
    <div className="dashboard-card">
      <img src={icon} alt={title} className="card-icon" />
      <p>{title}</p>
    </div>
  );
};

export default DashboardCard;

