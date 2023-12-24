import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../index.css';
import Logo from "./Logo.png";

function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navigation">
      <div 
        style={{ 
          marginLeft: "calc(max(20px, 100vw - 1280px))",
          marginRight: "calc(max(20px, 100vw - 1280px))"
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
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/2024-invitational">
                  {windowWidth < 866 ? '2024' : '2024 Invitational'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/past-tournaments">
                  {windowWidth < 866 ? 'Tournaments' : 'Past Tournaments'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/get-involved">
                  {windowWidth < 866 ? 'Volunteer' : 'Get Involved'}
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
