import React, { useState, useEffect } from "react";
import About1 from "./About1.jpg";
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
          </div>
          <div className="second-section">
            <img
              src={About1}
              alt="About1"
              style={{ 
                maxWidth: window.innerWidth < 866 ? "60%" : "32.5%",
                height: window.innerWidth < 866 ? "60%" : "32.5%",
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
                  Collaborating For Success
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
          <div className="second-section" style={{ marginBottom: "25px" }}>
		  	<div style={{ width: "100%" }}>
              <div>
                <p 
                  style={{
                    fontSize: "2.75vmin",
                    marginBottom: "0.25rem"
                  }}
                >
                  OUR TEAM
                </p>
                <h2
                  style={{
                    marginBottom: "2rem"
                  }}
                >
                  Get To Know Our Executive Board
                </h2>
                <p
                  style={{
                    marginBottom: "2.5rem"
                  }}
                >
                  Our executive board works year-round to achieve our mission through our annual invitational and other Science Olympiad initiatives. 
				  Our organization is also supported by the incredible work of our large community of volunteers that help write tests and run events on 
				  tournament day.
                </p>
              </div>
            </div>
          </div>
		  <hr class="solid"></hr>
		  <div className="image-section">
		  	<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "2rem",
					fontSize: "6vmin"
                  }}
                >
                  2024 Tournament Directors
                </h2>
              </div>
            </div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "2rem",
					fontSize: "6vmin"
                  }}
                >
                  Events Coordinators
                </h2>
              </div>
            </div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "2rem",
					fontSize: "6vmin"
                  }}
                >
                  Logistics Coordinators
                </h2>
              </div>
            </div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "2rem",
					fontSize: "6vmin"
                  }}
                >
                  Volunteer Coordinators
                </h2>
              </div>
            </div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "2rem",
					fontSize: "6vmin"
                  }}
                >
                  Finance
                </h2>
              </div>
            </div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "2rem",
					fontSize: "6vmin"
                  }}
                >
                  Technology
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
