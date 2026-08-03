import React, { useState } from "react";
import "./FinancialReports.css";

const FinancialReports = () => {
    const [stationFilter, setStationFilter] = useState("");
    const [trainFilter, setTrainFilter] = useState("");

    // Sample data for financial reports
    const financialData = [
        { id: 1, station: "Tokyo (東京)", earnings: 50000, passengers: 150, trainId: "T001" },
        { id: 2, station: "Kanda (神田)", earnings: 32000, passengers: 95, trainId: "T002" },
        { id: 3, station: "Akihabara (秋葉原)", earnings: 45000, passengers: 120, trainId: "T001" },
        { id: 4, station: "Ueno (上野)", earnings: 39000, passengers: 100, trainId: "T003" },
        { id: 5, station: "Uguisudani (鶯谷)", earnings: 28000, passengers: 80, trainId: "T002" },
    ];

    // Filtered Data
    const filteredData = financialData.filter((entry) => {
        return (
            (stationFilter === "" || entry.id.toString() === stationFilter) &&
            (trainFilter === "" || entry.trainId === trainFilter)
        );
    });

    return (
        <div className="financial-reports">
            <h2>Financial Reports</h2>

            <div className="filters">
                <select value={stationFilter} onChange={(e) => setStationFilter(e.target.value)}>
                    <option value="">Select Station ID</option>
                    {financialData.map((entry) => (
                        <option key={entry.id} value={entry.id}>
                            {entry.id}
                        </option>
                    ))}
                </select>

                <select value={trainFilter} onChange={(e) => setTrainFilter(e.target.value)}>
                    <option value="">Select Train ID</option>
                    {[...new Set(financialData.map((entry) => entry.trainId))].map((trainId) => (
                        <option key={trainId} value={trainId}>
                            {trainId}
                        </option>
                    ))}
                </select>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Station ID</th>
                        <th>Station Name</th>
                        <th>Earnings (JPY)</th>
                        <th>Total Passengers</th>
                        <th>Train ID</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((entry) => (
                            <tr key={entry.id}>
                                <td>{entry.id}</td>
                                <td>{entry.station}</td>
                                <td>{entry.earnings}</td>
                                <td>{entry.passengers}</td>
                                <td>{entry.trainId}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No matching records found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="pagination">
                <button>Back</button>
                <button>Next</button>
            </div>
        </div>
    );
};

export default FinancialReports;
