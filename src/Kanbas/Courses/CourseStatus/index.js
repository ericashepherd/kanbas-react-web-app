import {FaBan, FaFileImport, FaShareSquare} from "react-icons/fa"
import {BsFillCheckCircleFill, BsFillBarChartLineFill, 
        BsBell, BsFillCalendarDateFill} from "react-icons/bs"
import {BiTargetLock} from "react-icons/bi"
import {GrAnnounce} from "react-icons/gr"
import "../../../styles.css";
import "./index.css";

function CourseStatus() {      
    return(
        <div className="wd-course-status container mt-4">
            <div className="row">
                <h6 className="ps-0">Course Status</h6>
            </div>
            <div className="row">
                <div className="col-6 px-0">
                    <button type="button" 
                        className="wd-gray-button btn btn-secondary w-100 text-start">
                        <FaBan/>&thinsp;Unpublish
                    </button>
                </div> 
                <div className="col-6 px-1">
                    <button type="button" 
                        className="btn btn-success w-100 text-start"
                        disabled>
                        <BsFillCheckCircleFill/>&thinsp;Published
                    </button>   
                </div> 
            </div>
            <br/>
            <div className="row mb-2">
                <button type="button" 
                    className="wd-gray-button btn btn-secondary text-start">
                    <FaFileImport/>&thinsp;Import Existing Content
                </button>
            </div>
            <div className="row mb-2">
                <button type="button" 
                    className="wd-gray-button btn btn-secondary text-start">
                    <FaShareSquare/>&thinsp;Import from Commons
                </button>
            </div>
            <div className="row mb-2">
                <button type="button" 
                    className="wd-gray-button btn btn-secondary text-start">
                    <BiTargetLock/>&thinsp;Choose Home Page
                </button>
            </div>
            <div className="row mb-2">
                <button type="button" 
                    className="wd-gray-button btn btn-secondary text-start">
                    <BsFillBarChartLineFill/>&thinsp;View Course Stream
                </button>
            </div>
            <div className="row mb-2">
                <button type="button"
                    className="wd-gray-button btn btn-secondary text-start">
                    <GrAnnounce/>&thinsp;New Announcement
                </button>
            </div>
            <div className="row mb-2">
                <button type="button" 
                    className="wd-gray-button btn btn-secondary text-start">
                    <BsFillBarChartLineFill/>&thinsp;New Analytics
                </button>
            </div>
            <div className="row mb-2">
                <button type="button" 
                    className="wd-gray-button btn btn-secondary text-start">
                    <BsBell/>&thinsp;View Course Notifications
                </button>
            </div>

            <br/>
            <div className="row">
                <h6 className="ps-0">
                    Coming Up
                    <div className="float-end">
                        <i className="far fa-calendar"></i>
                        <a href="#">View Calendar</a>
                    </div>
                </h6>
                <hr/>
            </div>
            
            <ul className="list-group list-group-flush">

                <li className="list-group-item ps-0">
                    <div className="row">
                        <div className="col-1 mt-1">
                            <BsFillCalendarDateFill/>
                        </div>
                        <div className="col">
                            <a href="#">Lecture</a>
                            <br/>
                            CS4550.12631.202410
                            <br/>
                            Sep 11 at 11:45am
                        </div>
                    </div>
                </li>
                <li className="list-group-item ps-0">
                    <div className="row">
                        <div className="col-1 mt-1">
                            <BsFillCalendarDateFill/>
                        </div>
                        <div className="col">
                            <a href="#">CS5610 06 SP23 Lecture</a>
                            <br/>
                            CS5610.12631.202410
                            <br/>
                            Sep 11 at 6pm
                        </div>
                    </div>
                </li>
                <li className="list-group-item ps-0">
                    <div className="row">
                        <div className="col-1 mt-1">
                            <BsFillCalendarDateFill/>
                        </div>
                        <div className="col">
                            <a href="#">CS5610 Web Development Summer 1 2023 - LECTURE</a>
                            <br/>
                            CS4550.12631.202410
                            <br/>
                            Sep 11 at 7pm
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );                    
}

export default CourseStatus;