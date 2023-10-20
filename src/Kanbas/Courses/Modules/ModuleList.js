import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {BsGripVertical, BsThreeDotsVertical} from "react-icons/bs" 
import {AiFillCheckCircle, AiFillCaretDown} from "react-icons/ai"
import "../../../styles.css";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-modules">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item list-group-item-secondary rounded-0">
            <h5>
              <BsGripVertical/> 
              {module.name}
              <div className="float-end">
                <AiFillCheckCircle className="wd-green"/>
                <AiFillCaretDown/> +
                &thinsp;
                <BsThreeDotsVertical/>
              </div>
            </h5>
            <p>{module.description}</p>
            {
              module.lessons && (
                  <ul className="list-group rounded-0">
                      {
                          module.lessons.map((lesson, index) => (
                            <li key={index} className="list-group-item">
                              <div className="d-flex ">
                                <div className="align-self-center">
                                  <h6><BsGripVertical/></h6>
                                </div>
                                <div className="col flex-fill">
                                  <h6>{lesson.name}</h6>
                                  <p>{lesson.description}</p>
                                </div>
                                <div className="align-self-center float-end" style={{"min-width": "40px"}}>
                                  <AiFillCheckCircle className="wd-green"/>
                                  <BsThreeDotsVertical/>
                                </div>
                              </div>
                            </li>
                          ))
                      }
                  </ul>
              )
            }
           </li>
  
      ))
      }
    </ul>
  );
}
export default ModuleList;