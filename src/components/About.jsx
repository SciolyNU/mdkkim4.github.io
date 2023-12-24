import React, { useState, useEffect } from "react";
import Arch from "./Arch2.png";
import Home1 from "./Home1.png";
import Home2 from "./Home2.png";
import Footer from "./Footer";

function About() {
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
            marginLeft: "calc(max(40px, 100vw - 1280px))",
            marginRight: "calc(max(40px, 100vw - 1280px))"
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
                  About Us
                </h1>
                <p
                  style={{
                    marginTop: "50px"
                  }}
                >
                  Northwestern University Science Olympiad (NUSO) was founded in 2021 with a mission to better our surrounding 
				  Science Olympiad community. Composed of Science Olympiad alums and STEM-loving folks, we strive to bring quality competition 
				  to our nationally-recognized campus. As a dedicated team, we work year-round on initiatives to realize our goal and create 
				  memorable Science Olympiad experiences for students.<br/><br/>We are currently preparing for our third annual Northwestern Invitational 
				  on February 24th, 2024.
                </p>
              </div>
            </div>
            {/* <img
              src={Arch}
              alt="Arch"
              style={{ 
                maxWidth: "410px",
                maxHeight: "443px"
              }}
            /> */}
          </div>
          <div className="second-section">
            <img
              src={Home1}
              alt="Home1"
              style={{ 
                maxWidth: window.innerWidth < 866 ? "50%" : "28.5%",
                height: window.innerWidth < 866 ? "50%" : "28.5%",
                marginBottom: window.innerWidth < 866 ? "100px" : "0px"
              }}
            />
            <div style={{ width: window.innerWidth < 866 ? "100%" : "60%" }}>
              <div>
                <p 
                  style={{
                    fontSize: "2.75vmin",
                    marginBottom: "0.25rem"
                  }}
                >
                  OUR WORK
                </p>
                <h2
                  style={{
                    marginBottom: "2rem"
                  }}
                >
                  Collaborating for Success
                </h2>
                <p
                  style={{
                    marginBottom: "2.5rem"
                  }}
                >
                  Beyond our annual invitational, we volunteer at other Science Olympiad competitions to improve the accessibility and quality of
				  opportunities available to high school students. If you need volunteers to help at your invitational, please reach out to us! 
                </p>
                <div className="button">
                  CONTACT US
                </div>
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
                <div className="button">
                    GET ACTIVE WITH NUSO
                </div>
              </div>
            </div>
            <img
              src={Home2}
              alt="Home2"
              style={{ 
                maxWidth: window.innerWidth < 866 ? "50%" : "28.5%",
                height: window.innerWidth < 866 ? "50%" : "28.5%",
                marginTop: window.innerWidth < 866 ? "100px" : "0px"
              }}
            />
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
            <div className="button-black">
              LEARN MORE ABOUT NUSO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
