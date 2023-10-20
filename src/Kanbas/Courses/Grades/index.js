import db from "../../Database";
import { useParams } from "react-router-dom";
import { BsSearch, BsFillGearFill } from "react-icons/bs";
import { FaFileImport, FaFileExport, FaFilter } from "react-icons/fa";
import "../../../styles.css";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="wd-flex-row-container wd-flex-grow-1">
      <div className="wd-flex-grow-1 ms-2 me-4 mb-4">
        <div className="wd-grades">
          <div className="wd-flex-row-container">
              <div className="ms-auto">
                  <button type="button" 
                      className="wd-gray-button btn btn-secondary ms-1 h-100">
                      <FaFileImport/>
                      &thinsp;
                      Import
                  </button>
                  <button type="button" 
                      className="wd-gray-button btn dropdown-toggle btn-secondary ms-1 h-100"
                      data-toggle="dropdown">
                      <FaFileExport/>
                      &thinsp;
                      Export
                  </button>
                  <button type="button" 
                      className="wd-gray-button btn btn-secondary ms-1 h-100">
                      <BsFillGearFill/>
                  </button>
              </div>
          </div>
          
          <br/>
          
          <div className="row wd-search mx-0">
              <div className="col ps-0">
                  <h4>Student Names</h4>
                  <div className="input-group border border-dark border-opacity-50">
                      <span className="input-group-text" 
                          id="searchStudents">
                          <BsSearch/>
                      </span>
                      <input className="form-control" type="text" 
                          id="searchStudents"
                          placeholder="Search Students"
                          style={{"text-align": "left"}}/>
                      <span className="input-group-append">
                          <button type="button" 
                              className="wd-gray-button btn dropdown-toggle btn-secondary ms-1 h-100"
                              data-toggle="dropdown">
                          </button>
                      </span>
                  </div>
              </div>
              <div className="col pe-0">
                  <h4>Assignment Names</h4>
                  <div className="input-group wd-search border border-dark border-opacity-50">
                      <span className="input-group-text" 
                          id="searchAssignments">
                          <BsSearch/>
                      </span>
                      <input className="form-control" type="text" 
                          id="searchAssignments"
                          placeholder="Search Assignments"
                          style={{"text-align": "left"}}/>
                      <span className="input-group-append">
                          <button type="button" 
                              className="wd-gray-button btn dropdown-toggle btn-secondary ms-1 h-100"
                              data-toggle="dropdown">
                          </button>
                      </span>
                  </div>
              </div>
          </div>
          
          <button type="button" 
              className="wd-gray-button btn btn-secondary my-2">
              <FaFilter/>
              &thinsp;
              Apply Filters
          </button>
          
          <div className="table-responsive wd-red-links">
              <table className="table table-striped table-bordered">
                  <thead>
                      <tr className="table-active align-middle">
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th className="wd-align-center">{assignment.title}</th>))}
                      </tr>
                  </thead>
                  <tbody className="wd-align-center align-middle">
                    <tr></tr>
                    {enrollments.map((enrollment) => {
                      const user = db.users.find((user) => user._id === enrollment.user);
                      return (
                        <tr>
                          <td className="wd-align-left" style={{"color":"red"}}>{user.firstName} {user.lastName}</td>
                          {assignments.map((assignment) => {
                            const grade = db.grades.find(
                              (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                              return (<td>{grade?.grade || ""}</td>);})}
                        </tr>);
                    })}
                  </tbody>
              </table>
          </div>    
        </div>
      </div>
    </div>
  );
}
export default Grades;
