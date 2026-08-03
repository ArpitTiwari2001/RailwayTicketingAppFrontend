import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PassengerList from "./components/PassengerList";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import FinancialReports from "./pages/FinancialReports";
import PassengersPerStation from "./pages/PassengersPerStation";
import SearchPassengerPage from "./pages/SearchPassengerPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />  {/* Sidebar will always be visible */}
        <Routes>
          <Route path="/passengers" element={<PassengerList />} />
          <Route path="/financial-reports" element={<FinancialReports/>} />
          <Route path="/station-passengers" element={<PassengersPerStation />}/>
          <Route path="/search-passenger" element={<SearchPassengerPage/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
