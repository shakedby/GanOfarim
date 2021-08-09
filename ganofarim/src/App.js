import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Activities from "./Components/Activities/Activities";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Gallery from "./Components/Gallery/Gallery";
import Gardenfacilities from "./Components/Gardenfacilities/Gardenfacilities";
import Team from "./Components/Team/Team";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Gallery" component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
