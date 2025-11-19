import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Arch from "./Arch2.png";
import Home1 from "./Home1.png";
import Home2 from "./Home2.png";
function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
      <div className="first-section" style={{ flexDirection: windowWidth < 866 ? 'column' : 'row' }}>
        <div
          style={{
            minHeight: "25vh",
            maxWidth: "100%",
            display: "flex",
            textAlign: "start",
            flexDirection: "column"
          }}
        >
          <div style={{ zIndex: 1 }}>
            <h1>
              Northwestern University<br></br>Science Olympiad
            </h1>
            <p
              style={{
                marginTop: "30px"
              }}
            >
              February 21st, 2026
            </p>
          </div>
        </div>
        <img
          src={Arch}
          alt="Arch"
          style={{ 
            maxWidth: window.innerWidth < 490 ? "300px" : "410px",
            maxHeight: window.innerWidth < 490 ? "324.15px" : "443px"
          }}
        />
      </div>
      <div className="second-section">
        {window.innerWidth >= 866 ? (
          <img
            src={Home1}
            alt="Home1"
            style={{ 
              maxWidth: "28.5%",
              height: "28.5%",
              marginBottom: "0px"
            }}
          />
        ) : null}
        <div style={{ width: window.innerWidth < 866 ? "100%" : "60%" }}>
          <div>
            <p 
              style={{
                fontSize: "2.75vmin",
                marginBottom: "0.25rem"
              }}
            >
              2026 INVITATIONAL
            </p>
            <h2
              style={{
                marginBottom: "2rem"
              }}
            >
              Learn More About Our Upcoming Invitational
            </h2>
            <p
              style={{
                marginBottom: "2.5rem"
              }}
            >
              View new announcements, updates, resources, and important tournament day information on our 2026 Invitational page!
            </p>
            <Link to="/invitational">
              <div className="button">
                {windowWidth < 866 ? 'INVITE INFORMATION' : 'INVITATIONAL INFORMATION'}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div style={{ width: window.innerWidth < 866 ? "100%" : "60%" }}>
          <div>
            <p 
              style={{
                fontSize: "2.75vmin",
                marginBottom: "0.25rem"
              }}
            >
              GETTING INVOLVED
            </p>
            <h2
              style={{
                marginBottom: "2rem"
              }}
            >
              Explore Getting Involved With NU Science Olympiad
            </h2>
            <p
              style={{
                marginBottom: "2.5rem"
              }}
            >
              Join our growing community of undergraduate students, researchers, and faculty as we prepare our upcoming invitational!
            </p>
            <Link to="/get-involved">
              <div className="button">
                  GET ACTIVE WITH NUSO
              </div>
            </Link>
          </div>
        </div>
        {window.innerWidth >= 866 ? (
          <img
            src={Home2}
            alt="Home2"
            style={{ 
              maxWidth: "28.5%",
              height: "28.5%",
              marginBottom: "0px"
            }}
          />
        ) : null}
      </div>
      <div class="gradient-box">
        <h2
          style={{
            maxWidth: "70%",
            marginBottom: "2.5rem",
            textAlign: "center"
          }}
        >
          Find Out More About Our Organization and Our Team
        </h2>
        <Link to='about'>
          <div className="button-black">
            LEARN MORE ABOUT NUSO
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
