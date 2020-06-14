import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      //prettier-ignore
      <div>
        <nav>
          <h3 className="logo">Vaibhav Herugu: Storming Robots</h3>
          <a href="/" className="nav-links">Home</a>
          <a href="/Project" className="nav-links">My Project</a>
          <a href="/About" className="nav-links">About</a>
        </nav>
      </div>
    );
  }
}

export default Nav;
