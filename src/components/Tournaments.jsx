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
            maxWidth: '1280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
			alignItems: 'center',
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
                  Past Tournaments
                </h1>
				<hr class="solid"/>
                <p
                  style={{
                    marginTop: "50px"
                  }}
                >
                  We are currently preparing to host our fourth annual Northwestern Invitational. Past tournament exams and answer keys, team lists, and results can be found below.
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
						2024 Invitational
					</h2>
					<hr class="solid" style={{ borderTop: "1.5px solid #fff" }}/>
					<p
						style={{
						marginBottom: "2.5rem"
						}}
					>
						Our third annual Northwestern Invitational took place in-person at our Evanston campus on February 24th, 2024. Congratulations to Marquette University High School from Milwaukee, WI on their victory! 
						Thank you to all of the teams, coaches, and volunteers for making the tournament a success! See the available tests, answer keys, and scoresheets below.
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: windowWidth < 500 ? "column" : "row",
							marginTop: "50px"
						}}
					>
						<a href={'https://www.duosmium.org/results/2024-02-24_northwestern_invitational_c/'}>
							<div className="button" style={{ marginRight: "50px", marginBottom: "25px" }}>
								SCORESHEET
							</div>
						</a>
						{/* <a href={'https://drive.google.com/drive/folders/1zBI-xbTLdA8KquwZg0PdK4t7vI1lAiL-?usp=sharing'}>
							<div className="button">
								2023 TESTS
							</div>
						</a> */}
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
						Our second annual Northwestern Invitational took place in-person at our Evanston campus on February 25th, 2023. Congratulations to New Trier High School from Winnetka, Illinois on their victory! 
						Thank you to all of the teams, coaches, and volunteers for making the tournament a success! See the available tests, answer keys, and scoresheets below.
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: windowWidth < 500 ? "column" : "row",
							marginTop: "50px"
						}}
					>
						<a href={'https://www.duosmium.org/results/2023-02-25_northwestern_invitational_c/'}>
							<div className="button" style={{ marginRight: "50px", marginBottom: "25px" }}>
								SCORESHEET
							</div>
						</a>
						<a href={'https://drive.google.com/drive/folders/1zBI-xbTLdA8KquwZg0PdK4t7vI1lAiL-?usp=sharing'}>
							<div className="button">
								2023 TESTS
							</div>
						</a>
					</div>
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
						Our first annual Northwestern Invitational took place virtually on February 26th, 2022. Congratulations to Marquette University High School from Milwaukee, Wisconsin on their victory! 
						Thank you to all of the teams, coaches, and volunteers for making the tournament a success! See the available tests, answer keys, and scoresheets below.
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: windowWidth < 500 ? "column" : "row",
							marginTop: "50px"
						}}
					>
						<a href={'https://web.archive.org/web/20220307120038/https://scilympiad.com/il-nu/Info/Results/1dc8da02-8e99-41d9-a3e6-193319611f63'}>
							<div className="button" style={{ marginRight: "50px", marginBottom: "25px" }}>
								SCORESHEET
							</div>
						</a>
						<a href={'https://drive.google.com/drive/folders/1ahVTYhXELGBvNnf0wsVG65mkJkV7yu1f?usp=sharing'}>
							<div className="button">
								2022 TESTS
							</div>
						</a>
					</div>
				</div>
			</div>
          </div>
        </div>
    </div>
  );
}

export default Tournaments;
