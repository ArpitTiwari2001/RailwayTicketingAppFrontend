import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./PassengerList.css";

const PassengerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const passengersPerPage = 20;

  // Sample Data
  const passengers = [
    { id: 1, name: "John Smith", departure: "Tokyo (東京)", destination: "Ueno (上野)", train: "Local", time: "12:15", stops: 5, fare: 64.0, payment: "Cash", date: "2025-03-11 10:10:10" },
    { id: 2, name: "Arpit Narayan Tiwari", departure: "Akihabara (秋葉原)", destination: "Uguisudani (鶯谷)", train: "Limited Express", time: "14:30", stops: 6, fare: 48.0, payment: "Credit Card", date: "2025-03-10 18:12:34" },
    { id: 3, name: "Harsh Vardhan Gupta", departure: "Akihabara (秋葉原)", destination: "Uguisudani (鶯谷)", train: "Express", time: "18:00", stops: 6, fare: 48.0, payment: "Cash", date: "2025-03-10 10:12:34" },
  ];

  // Filtering Passengers based on search
  const filteredPassengers = passengers.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastPassenger = currentPage * passengersPerPage;
  const indexOfFirstPassenger = indexOfLastPassenger - passengersPerPage;
  const currentPassengers = filteredPassengers.slice(indexOfFirstPassenger, indexOfLastPassenger);

  return (
    <div className="passenger-page">
      <Sidebar />
      <div className="passenger-content">
        <h2 className="title">View all Passengers</h2>
        <div className="search-bar">
          <label>Search: </label>
          <input
            type="text"
            placeholder="Passenger Full Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
        <p className="info-text">*Click on Passenger ID to view individual passenger details</p>

        {/* Table */}
        <table className="passenger-table">
          <thead>
            <tr>
              <th>Passenger ID</th>
              <th>Name</th>
              <th>Departure Station</th>
              <th>Destination Station</th>
              <th>Train ID</th>
              <th>Departure Time</th>
              <th>Stop Number</th>
              <th>Fare Amount</th>
              <th>Mode of Payment</th>
              <th>Transaction Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {currentPassengers.map((p) => (
              <tr key={p.id}>
                <td><a href={`/passenger/${p.id}`} className="passenger-link">{p.id}</a></td>
                <td>{p.name}</td>
                <td>{p.departure}</td>
                <td>{p.destination}</td>
                <td className={`train-type ${p.train.replace(" ", "-").toLowerCase()}`}>{p.train}</td>
                <td>{p.time}</td>
                <td>{p.stops}</td>
                <td>{p.fare.toFixed(2)}</td>
                <td>{p.payment}</td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Back</button>
          <span>Showing {currentPage} out of 10 pages</span>
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PassengerList;
