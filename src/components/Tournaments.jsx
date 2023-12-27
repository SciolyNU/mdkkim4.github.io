import React, { useState, useEffect } from "react";
import About1 from "./About1.jpg";
import About2 from "./About2.jpg";
import Footer from "./Footer";

function Tournaments() {
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
                  Past Tournaments
                </h1>
				<hr class="solid"/>
                <p
                  style={{
                    marginTop: "50px"
                  }}
                >
                  We are currently preparing to host our third annual Northwestern Invitational. Past tournament exams and answer keys, team lists, and results can be found below.
                </p>
              </div>
            </div>
          </div>
		  <div className="first-section">
				<div>
				<h2
					style={{
					marginBottom: "1rem",
					fontSize: "6vmin"
					}}
				>
					2023 Invitational
				</h2>
				<hr class="solid" style={{ borderTop: "1.5px solid #fff" }}/>
				<p
					style={{
					marginBottom: "2.5rem"
					}}
				>
					Our second annual Northwestern Invitational took place in-person at our Evanston campus on February 25th, 2023. Check back for more updates on information.
				</p>
				</div>
			</div>
			<div className="first-section" style={{ marginBottom: "150px" }}>
				<div>
				<h2
					style={{
					marginBottom: "1rem",
					fontSize: "6vmin"
					}}
				>
					2022 Invitational
				</h2>
				<hr class="solid" style={{ borderTop: "1.5px solid #fff" }}/>
				<p
					style={{
					marginBottom: "2.5rem"
					}}
				>
					Our first annual Northwestern Invitational took place virtually on February 26th, 2022. Check back for more updates on information.
				</p>
				</div>
			</div>
          </div>
        </div>
    </div>
  );
}

export default Tournaments;
