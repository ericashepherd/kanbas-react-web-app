import { Link } from "react-router-dom";
import {BsThreeDotsVertical} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
import "../../styles.css";
import "./index.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
  ) {

  return (
    <div className="wd-dashboard-header">
      <h1>Dashboard</h1>
      <hr />
      <div className="wd-dashboard">
        <h2>Published Courses ({courses.length})</h2>

        <ul className="list-group">
          <li className="list-group-item my-2">
            <h5>Course</h5>
            <input value={course.name} className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button 
              type="button" 
              class="wd-red-button btn btn-danger me-2 mt-2"
              onClick={addNewCourse} >
              Add
            </button>
            <button 
              type="button"
              className="wd-gray-button btn btn-secondary mt-2"
              onClick={updateCourse} >
              Update
            </button>
          </li>
        </ul>


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
                      <button
                        type="button"
                        className="wd-gray-button btn btn-secondary me-2"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}>
                        <BiEdit/>
                        Edit
                      </button>

                      <button
                        type="button" 
                        class="wd-red-button btn btn-danger"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                      </button>
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
