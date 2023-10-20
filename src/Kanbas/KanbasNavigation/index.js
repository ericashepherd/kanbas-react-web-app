import { Link, useLocation } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaBook, FaTachometerAlt, FaShareSquare } from "react-icons/fa";
import { BsInboxFill, BsFillCalendarWeekFill, 
        BsFillClockFill, BsFillQuestionCircleFill } from "react-icons/bs";
import {PiMonitorPlayFill} from "react-icons/pi";
import "../../styles.css";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar",
                  "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiSolidUserCircle className="wd-icon wd-icon-account" />,
    Dashboard: <FaTachometerAlt className="wd-icon wd-red" />,
    Courses: <FaBook className="wd-icon wd-red" />,
    Calendar: <BsFillCalendarWeekFill className="wd-icon wd-red" />,
    Inbox: <BsInboxFill className="wd-icon wd-red"/>,
    History: <BsFillClockFill className="wd-icon wd-red"/>,
    Studio: <PiMonitorPlayFill className="wd-icon wd-red"/>,
    Commons: <FaShareSquare className="wd-icon wd-red"/>,
    Help: <BsFillQuestionCircleFill className="wd-icon wd-red"/>,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation">
      <img class="img-fluid" 
            alt="Responsive image"
            src="/images/nulogo.png"/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
