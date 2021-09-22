import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <h3>Logo</h3>
      <ul className="pages">
        <li>
          <Link to="/" className="item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="item">
            About
          </Link>
        </li>
        <li>
          <Link to="/aboutAPI" className="item">
            About API
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
