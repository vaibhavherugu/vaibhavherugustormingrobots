import React from "react";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FNF from "./FNF";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Project" component={Projects} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/" component={FNF} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
