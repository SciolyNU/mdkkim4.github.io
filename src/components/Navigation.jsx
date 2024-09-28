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
            maxWidth: '1280px',
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            paddingLeft: Math.max(40, (100 - (1280 / window.innerWidth) * 100) / 2) + 'px',
            paddingRight: Math.max(40, (100 - (1280 / window.innerWidth) * 100) / 2) + 'px',
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
                <NavLink className="nav-link" to="/2025-invitational">
                  {windowWidth < 866 ? '2025' : '2025 Invitational'}
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
