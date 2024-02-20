import React, { useState, useEffect } from "react";
import Arch from "./Arch2.png";
import Home1 from "./Home1.png";
import Home2 from "./Home2.png";
import Footer from "./Footer";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
      <div 
				style={{
					maxWidth: "100vw",
					minHeight: "100vh",
					position: "relative",
					overflow: "hidden"
				}}
			>
        <div 
          style={{ 
            maxWidth: '1280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '0 auto',
            paddingLeft: Math.max(40, (100 - (1280 / window.innerWidth) * 100) / 2) + 'px', 
            paddingRight: Math.max(40, (100 - (1280 / window.innerWidth) * 100) / 2) + 'px',
          }}
        >
          <div className="first-section">
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
                  February 24th, 2024
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
                  2024 INVITATIONAL
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
                  View new announcements, updates, resources, and important tournament day information on our 2024 Invitational page!
                </p>
                <a href={'2024-invitational'}>
                  <div className="button">
                    {windowWidth < 866 ? 'INVITE INFORMATION' : 'INVITATIONAL INFORMATION'}
                  </div>
                </a>
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
                <a href={'get-involved'}>
                  <div className="button">
                      GET ACTIVE WITH NUSO
                  </div>
                </a>
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
            <a href={'about'}>
              <div className="button-black">
                LEARN MORE ABOUT NUSO
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
