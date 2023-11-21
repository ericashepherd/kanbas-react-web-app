import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BsGripVertical, BsThreeDotsVertical} from "react-icons/bs" 
import {AiFillCheckCircle, AiFillCaretDown} from "react-icons/ai"
import "../../../styles.css";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = () => {
    client.updateModule(module).then((status) => {
      dispatch(addModule(module));
    });
  };


  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            className="mb-2 w-100"
            type="text"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
          <br/>
          <textarea
            className="w-100 mb-2"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
          <div className="float-end">
          <button
            type="button" 
            class="wd-red-button btn btn-danger ms-2"
            onClick={handleAddModule}>
            Add
          </button>
          <button
            type="button" 
            class="wd-gray-button btn btn-secondary ms-2"
            onClick={handleUpdateModule}>
            Update
          </button>
          </div>
        </li>
      </ul>
      <br/>

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
                  <button 
                    type="button"
                    className="wd-gray-button btn btn-secondary ms-2"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <button
                    type="button" 
                    class="wd-red-button btn btn-danger ms-2"
                    onClick={() => handleDeleteModule(module._id)}>
                    Delete
                  </button>
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
    </div>

  );
}
export default ModuleList;