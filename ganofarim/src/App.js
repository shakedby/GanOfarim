import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Activities from './Components/Activities/Activities';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/Activities" component={Activities} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
