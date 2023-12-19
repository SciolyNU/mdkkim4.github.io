import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand">
          <NavLink className="navbar-brand" to="/">
            N
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/2024-invitational">
                  2024 Invitational
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/past-tournaments">
                  Past Tournaments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/get-involved">
                  Get Involved
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">
                  Contact
                </NavLink>
                {/* Add more below this */}
              </li>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default Navigation;
