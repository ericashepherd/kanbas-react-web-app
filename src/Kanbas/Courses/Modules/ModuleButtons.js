import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiDotsVerticalRounded} from "react-icons/bi"
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleButtons() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return(
        <div>
            <div class="wd-modules wd-flex-row-container flex-row-reverse mt-3">
              <button type="button" 
              class="wd-gray-button btn btn-secondary ms-2">
                  <BiDotsVerticalRounded/>
              </button>
              <button type="button" 
              class="wd-red-button btn btn-danger ms-2">
                  + Module
              </button>
              <div class="dropdown ms-2">
                  <button type="button" 
                  class="wd-gray-button btn btn-secondary dropdown-toggle" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
                      <AiOutlineCheckCircle className="wd-green"/>&thinsp; Publish All
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="undefined">Publish All</a></li>
                    <li><a class="dropdown-item" href="undefined">Publish all items and modules</a></li>
                    <li><a class="dropdown-item" href="undefined">UnPublish</a></li>
                  </ul>
              </div>
              <button type="button" 
              class="wd-gray-button btn btn-secondary ms-2">
                  View Progress
              </button>
              <button type="button" 
              class="wd-gray-button btn btn-secondary">
                  Collapse All
              </button>

            </div>
            <hr/>
        </div>
    );
}

export default ModuleButtons;