import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import db from "../../Database";
import "../../../styles.css"
import "./index.css"

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="wd-flex-row-container wd-flex-grow-1">
      <div className="wd-flex-grow-1 ms-2 me-4 mb-4">
        <div className="wd-assignments-editor wd-flex-row-container">
            <div className="ms-auto">
                <span className="wd-published me-2">
                  <AiFillCheckCircle className="wd-green"/>
                  &thinsp;
                  Published
                </span>
                <button type="button" 
                    className="wd-gray-button btn btn-secondary ms-1 h-100">
                    <BsThreeDotsVertical/>
                </button>
            </div>
        </div>
        <hr/>

        <div className="wd-assignments-editor align-items-center">
          <label for="assignmentName" className="form-label">
              Assignment Name
          </label>
          <input id="assignmentName"
              type="text" className="form-control"
              value={assignment.title}/> 
          
          <br/>

          <textarea className="form-control" rows="5"
            value={assignment.title}>
          </textarea>

          <br/>
          <div className="row">
              <div className="col-3 pe-0">
                  <label for="points" className="form-label float-end mb-0 mt-1">
                      Points
                  </label>
              </div>
              <div className="col-7">
                  <input id="points"
                      type="text" className="form-control"/> 
              </div>
          </div>
          <br/>
          <div className="row">
              <div className="col-3 pe-0">
                  <label for="assignmentGroup" className="form-label float-end mb-0 mt-1">
                      Assignment Group
                  </label>
              </div>
              <div className="col-7">
                  <select id="assignmentGroup"
                      className="form-select">
                      <option selected>ASSIGNMENTS</option>
                      <option>ASSIGNMENTS</option>
                    </select>
              </div>
          </div>
          <br/>
          <div className="row">
              <div className="col-3 pe-0">
                  <label for="displayGrade" className="form-label float-end mb-0 mt-1">
                      Display Grade as
                  </label>
              </div>
              <div className="col-7">
                  <select id="displayGrade"
                      className="form-select">
                      <option selected>Percentage</option>
                      <option>Fraction</option>
                  </select>
              </div>
          </div>
          <br/>
          <div className="row">
              <div className="col-3 pe-0">
              </div>
              <div className="col-7">
                  <input id="ignoreFinal" className="form-check-input" type="checkbox"/>
                  &thinsp;&thinsp;
                  <label for="ignoreFinal" className="form-check-label">
                      Do not count this assignment towards the final grade
                  </label>
              </div>
          </div>
          <br/>
          <div className="row">
              <div className="col-3 pe-0">
                  <label for="submissionType" className="form-label float-end mb-0 mt-1">
                      Submission Type
                  </label>
              </div>
              <div className="col-7">
                  <div className="border border-light-subtle">
                      <select id="submissionType"
                          className="form-select w-75 mt-3 ms-3" aria-label="Default select example">
                          <option selected>Online</option>
                          <option>Offline</option>
                      </select>
                      <br/>
                      <span className="wd-bold ms-3">Online Entry Options:</span>
                      <div className="form-check ms-3 my-3">
                          <input id="textEntry"
                              className="form-check-input" 
                              type="checkbox" value="" 
                              checked/>
                          <label for="textEntry" className="form-check-label mb-3">
                          Text Entry
                          </label>
                          <br/>
                          <input id="webURL"
                              className="form-check-input" 
                              type="checkbox" value="" 
                              checked/>
                          <label for="webURL" className="form-check-label">
                          Website URL
                          </label>
                      </div>              
                  </div>
              </div>
          </div>
          <br/>
          <div className="row">
              <div className="col-3 pe-0">
                  <label for="assign" className="form-label float-end mb-0 mt-1">
                      Assign
                  </label>
              </div>
              <div className="col-7">
                  <div className="border border-light-subtle">
                      <br/>
                      <span className="wd-bold ms-3">Assign to</span>
                      <div className="border border-light-subtle mx-3 mt-1">
                          <span className="badge text-bg-secondary mx-2 my-2">
                              Everyone
                              <i className="fas fa-times"></i>
                          </span>
                      </div>     


                      <br/> 
                      <label for="due">
                          <span className="wd-bold ms-3">Due</span> 
                      </label>
                      <br/>
                      <input type="date"
                          id="due"
                          value="2023-09-18"
                          className="ms-3"/>
                      <br/><br/>

                      <div className="row">
                          <div className="col">
                              <label for="available">
                                  <span className="wd-bold ms-3">Available from</span> 
                              </label>
                              <br/>
                              <input type="date"
                                  id="available"
                                  value="2023-09-18"
                                  className="ms-3"/>
                          </div>
                          <div className="col">
                              <label for="until">
                                  <span className="wd-bold ms-3">Until</span> 
                              </label>
                              <br/>
                              <input type="date"
                                  id="until"
                                  value="2023-09-18"
                                  className="ms-3"/>
                          </div>
                      </div>
          
                      <br/>
                  </div>
                  <div>
                      <button type="button" 
                          className="wd-gray-button btn btn-secondary w-100">
                          + Add
                      </button>
                  </div>
              </div>
          </div>
          <br/>
          <hr/>
          <div className="wd-flex-row-container ms-3 mb-3">
              <div className="flex-fill">
                  <input id="ignoreFinal" className="form-check-input me-2" type="checkbox"/>
                  <label for="ignoreFinal" className="form-check-label">
                      Notify users that this content has changed
                  </label>
              </div>
              <div className="float-end wd-red-links">
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                      <button type="button" 
                          className="wd-gray-button btn btn-secondary ms-1">
                          Cancel
                      </button>
                  </Link>
                  <button onClick={handleSave} type="button" 
                      className="wd-red-button btn btn-danger ms-1">
                      Save
                  </button>
              </div>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}


export default AssignmentEditor;