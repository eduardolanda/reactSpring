import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/project/:projectID" component={ProjectDetails} />
      </Router>
    </div>
  );
}

export default App;
