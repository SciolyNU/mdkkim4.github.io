import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../index.css';
import Logo from "./Logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div 
        style={{ 
          marginLeft: "calc(max(10px, 100vw - 1280px))",
          marginRight: "calc(max(10px, 100vw - 1280px))"
        }}
      >
        <nav className="navbar navbar-expand">
          <NavLink className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ 
                maxWidth: "auto",
                height: "59px"
              }}
            />
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
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
