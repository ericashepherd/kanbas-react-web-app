import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Nav from "../Nav";
import "../styles.css";

function Kanbas() {
  return (
    <div>
      <Nav/>
      <div className="wd-flex-row-container">
        <KanbasNavigation />
        <div className="wd-flex-grow-1 ms-2 me-4 mb-4">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Kanbas;
