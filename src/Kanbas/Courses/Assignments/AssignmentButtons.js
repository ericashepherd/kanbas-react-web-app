import { BsThreeDotsVertical } from "react-icons/bs";
import "../../../styles.css"
import "./index.css";

function AssignmentButtons() {
    return(
        <div className="wd-assignments wd-flex-justify-container mt-3">
            <div className="w-25">
                <input type="text" className="form-control" 
                placeholder="Search for Assignment"/>
            </div>
            <div>
                <button type="button" 
                    className="wd-gray-button btn btn-secondary ms-1">
                    + Group
                </button>
                <button type="button" 
                    className="wd-red-button btn btn-danger ms-1">
                    + Assignment
                </button>
                <button type="button" 
                    className="wd-gray-button btn btn-secondary ms-1 h-100">
                    <BsThreeDotsVertical/>
                </button>
            </div>
        </div>
    );
}

export default AssignmentButtons;