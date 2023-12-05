import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {HiBars3} from "react-icons/hi2"
import "../../styles.css";

function Courses() {
  const { courseId } = useParams();
  const API_BASE =  `${process.env.REACT_APP_API_URL}/api`;
  //const URL = `${API_BASE}/courses`;
  const URL = `http://localhost:4000/api/courses`;
  const {pathname} = useLocation();
  const [empty, kanbas, coursesP, id, screen] = pathname.split("/");
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="wd-courses">
      <h4 className="wd-red mt-3 ms-3 align-items-center">
        <HiBars3/> &thinsp; Course {course.name} 
        &thinsp;
        <span className="wd-gray">&gt;</span> 
        &thinsp;
        <span className="wd-black">{screen}</span>
      </h4>
      <hr/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "140px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;
