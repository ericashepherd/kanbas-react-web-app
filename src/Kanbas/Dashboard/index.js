import db from "../Database";
import { Link } from "react-router-dom";
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import "../../styles.css";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-dashboard-header">
      <h1>Dashboard</h1>
      <hr />
      <div className="wd-dashboard">
        <h2>Published Courses ({courses.length})</h2>
        <div class="row rows-cols-auto">
          {courses.map((course, index) => (
            <div className="col">
              <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              >
                <div class="card h-100">
                    <div class="card-header wd-flex-row-container flex-row-reverse">
                      <BsThreeDotsVertical/>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{course.name}</h5>
                      <p class="card-text">
                        {course._id}.{course.number}
                        <br/>
                        {course.startDate} Semester Full Term {course.name}
                      </p>
                      <BiEdit/>
                    </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
