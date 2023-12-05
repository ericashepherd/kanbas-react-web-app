import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import StateManagement from "./Lectures/StateManagement";
import Project from "./project";

function App() {
  const screen = "Labs";
  return (
    <HashRouter>
      <div>
        {/*
        <h1>React Labs</h1>
        <Link to="/Hello">Hello World</Link>
        <br/>
        <Link to="/Labs">Labs</Link>
        <br/>
        <Link to="/Kanbas">Kanbas</Link>
        */}
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/project/*" element={<Project />} />
          <Route path="/Lectures" element={<StateManagement />} />
        </Routes>
        {/* {screen === "Hello" && <HelloWorld />}
        {screen === "Labs" && <Labs />}
        {screen === "Kanbas" && <Kanbas />} */}
      </div>
    </HashRouter>
  );
}

export default App;
