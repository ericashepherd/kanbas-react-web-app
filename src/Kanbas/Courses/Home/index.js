import CourseStatus from "../CourseStatus";
import ModuleButtons from "../Modules/ModuleButtons";
import ModuleList from "../Modules/ModuleList";
import "../../../styles.css";

function Home() {
  return (
    <div className="wd-flex-row-container wd-flex-grow-1">
        <div className="wd-flex-grow-1 ms-2 me-4 mb-4">
            <ModuleButtons/>
            <ModuleList />
        </div>
        <div className="d-none d-xl-block">
            <CourseStatus />
        </div>
    </div>
  );
}
export default Home;