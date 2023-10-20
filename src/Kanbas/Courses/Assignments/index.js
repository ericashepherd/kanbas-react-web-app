import React from "react";
import { Link, useParams } from "react-router-dom";
import {BsGripVertical, BsThreeDotsVertical} from "react-icons/bs" 
import {AiFillCheckCircle, AiFillCaretDown, AiOutlinePlus} from "react-icons/ai"
import AssignmentButtons from "./AssignmentButtons";
import {LuFileEdit} from "react-icons/lu"
import db from "../../Database";
import "../../../styles.css";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="wd-flex-row-container wd-flex-grow-1">
        <div className="wd-flex-grow-1 ms-2 me-4 mb-4">
          <AssignmentButtons/>
          <hr/>
          <ul className="list-group wd-assignments me-3 ms-2">
            <li key="assignments" className="list-group-item list-group-item-secondary rounded-0 px-0 pb-0">
              <h6 className="py-2">
                &thinsp;
                <BsGripVertical/> 
                <AiFillCaretDown/>
                &thinsp;
                ASSIGNMENTS
                <div className="float-end pe-2">
                  <span class="border border-dark px-2 py-1 me-2 rounded-4">
                      40% of Total
                  </span>
                  &thinsp;
                  <AiOutlinePlus/>
                  &thinsp;
                  <BsThreeDotsVertical/>
                </div>
              </h6>

              <ul className="list-group rounded-0">
                {courseAssignments.map((assignment, index) => (
                  <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item px-0">
           
                    <div className="d-flex">
                      <div className="align-self-center">
                        <h6>
                          <BsGripVertical className="mx-2 my-0"/>
                          &thinsp;
                          <LuFileEdit className="wd-green"/>
                        </h6>
                      </div>
                      <div className="flex-fill pt-1 align-self-center">
                        <h6 className="mb-n3">{assignment.title}</h6>
                        <p className="mb-0">
                          <span className="wd-red">Multiple Modules</span>
                          &thinsp; | &thinsp; Due: {assignment.due}
                          &thinsp; | &thinsp; {assignment.points} pts
                        </p>
                      </div>
                      <div className="align-self-center float-end" style={{"min-width": "40px"}}>
                        <AiFillCheckCircle className="wd-green"/>
                        <BsThreeDotsVertical/>
                      </div>
                    </div>
                    
                  </Link>
                ))}
              </ul>
            </li>
          </ul>
        </div>
    </div>
  );
}
export default Assignments;