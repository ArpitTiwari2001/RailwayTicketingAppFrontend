import React, { useState } from "react";
import "./PassengersPerStation.css";

const PassengersPerStation = () => {
    const [filter, setFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const entriesPerPage = 20;

    // Sample Data (Replace with API Data)
    const passengersData = [
        { id: 4, name: "Xinyi Zhang", destination: "Sugamo (巣鴨)", stationId: 11, stopNumber: 11, departureTime: "2025-03-11 09:10:10" },
        { id: 5, name: "Yoonji Cho", destination: "Sugamo (巣鴨)", stationId: 11, stopNumber: 11, departureTime: "2025-03-11 14:15:12" },
        { id: 6, name: "Disha Chaudhary", destination: "Sugamo (巣鴨)", stationId: 11, stopNumber: 11, departureTime: "2025-03-11 20:45:12" },
        { id: "...", name: "...", destination: "...", stationId: "...", stopNumber: "...", departureTime: "....." },
    ];

    // Filtering Data
    const filteredData = passengersData.filter((entry) => {
        return (
            filter === "" ||
            entry.destination.toLowerCase().includes(filter.toLowerCase()) ||
            entry.stationId.toString().includes(filter) ||
            entry.stopNumber.toString().includes(filter)
        );
    });

    // Pagination Logic
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

    return (
        <div className="passengers-per-station">
            <h2>Passengers Per Station</h2>

            <div className="filter-section">
                <label>Filter: </label>
                <input
                    type="text"
                    placeholder="Station Name/ Station ID/ Stop Number"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Passenger ID</th>
                        <th>Name</th>
                        <th>Destination/StationID/StopNumber</th>
                        <th>Departure Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEntries.length > 0 ? (
                        currentEntries.map((entry) => (
                            <tr key={entry.id}>
                                <td>
                                    <a href={`#passenger-${entry.id}`}>{entry.id}</a>
                                </td>
                                <td>{entry.name}</td>
                                <td>
                                    <a href={`#station-${entry.stationId}`}>
                                        {entry.destination} / {entry.stationId} / {entry.stopNumber}
                                    </a>
                                </td>
                                <td>{entry.departureTime}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No matching records found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Back</button>
                <span>
                    Showing {entriesPerPage} entries | Page {currentPage} of {Math.ceil(filteredData.length / entriesPerPage)}
                </span>
                <button
                    disabled={currentPage >= Math.ceil(filteredData.length / entriesPerPage)}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PassengersPerStation;
