import ModuleList from "./ModuleList";
import ModuleButtons from "./ModuleButtons";

function Modules() {
  return (
    <div className="wd-flex-row-container wd-flex-grow-1">
        <div className="wd-flex-grow-1 ms-2 me-4 mb-4">
            <ModuleButtons/>
            <ModuleList />
        </div>
    </div>
  );
}
export default Modules;