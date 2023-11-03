import { Route, Routes, Navigate } from "react-router";
import { Provider } from "react-redux";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Nav from "../Nav";
import store from "./store";
import db from "./Database";
import { useState } from "react";
import "../styles.css";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <div>
        <Nav/>
        <div className="wd-flex-row-container">
          <KanbasNavigation />
          <div className="wd-flex-grow-1 ms-2 me-4 mb-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<Account />} />
              <Route path="Dashboard" element={
                <Dashboard 
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
                } />
              <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
