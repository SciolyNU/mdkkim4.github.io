import React, { useState, useEffect } from "react";
import About1 from "./About1.jpg";
import About2 from "./About2.jpg";
import AliyaBekshenova from "./AliyaBekshenova.jpeg";
import CarsonWalters from "./CarsonWalters.jpg";
import ClaireShen from "./ClaireShen.jpg";
import DaveArthur from "./DaveArthur.jpeg";
import DavieShi from "./DavieShi.jpeg";
import EdwardLee from "./EdwardLee.jpg";
import FarleyWall from "./FarleyWall.jpg";
import GinaSong from "./GinaSong.jpeg";
import JackVogel from "./JackVogel.jpg";
import JasonChen from "./JasonChen.jpg";
import JoanneLi from "./JoanneLi.jpg";
import KathrynJacksonJones from "./KathrynJacksonJones.jpg";
import MichaelKim from "./MichaelKim.jpg";
import ReedMalcolm from "./ReedMalcolm.png";
import SkylerStone from "./SkylerStone.jpg";
import VictorJia from "./VictorJia.jpg";
import VincentXiong from "./VincentXiong.jpg";
import WillBruner from "./WillBruner.jpg";
import Purple from "./Purple.png";
import Footer from "./Footer";

function Invitational() {
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
            <div style={{ width: window.innerWidth < 866 ? "100%" : "60%" }}>
              <div>
                <p 
                  style={{
                    fontSize: "2.75vmin",
                    marginBottom: "0.25rem"
                  }}
                >
                  OUR COMPETITION
                </p>
                <h2
                  style={{
                    marginBottom: "2rem"
                  }}
                >
                  About The Invitational
                </h2>
                <p
                  style={{
                    marginBottom: "2.5rem"
                  }}
                >
                  We host a Division C tournament with all 23 national events at our incredible Evanston campus. All tests are written by undergraduates, graduates, and faculty, 
				  many of whom are Science Olympiad alums that competed at the highest levels.
                </p>
                <div className="button">
                    2024 INVITATIONAL INFORMATION
                </div>
              </div>
            </div>
            <img
              src={About2}
              alt="About2"
              style={{ 
                maxWidth: window.innerWidth < 866 ? "60%" : "32.5%",
                height: window.innerWidth < 866 ? "60%" : "32.5%",
                marginTop: window.innerWidth < 866 ? "100px" : "0px"
              }}
            />
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
		  <hr class="solid"/>
		  <div className="image-section">
		  	<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "50px",
					fontSize: "6vmin"
                  }}
                >
                  2024 Tournament Directors
                </h2>
              </div>
            </div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={JackVogel}
						alt="JackVogel"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Jack Vogel</p>
					<p style={{ margin: 0 }}>2025</p>
				</div>
				<div className="image-and-text">
					<img
						src={SkylerStone}
						alt="SkylerStone"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Skyler Stone</p>
					<p style={{ margin: 0 }}>2025</p>
				</div>
			</div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "50px",
					fontSize: "6vmin"
                  }}
                >
                  Events Coordinators
                </h2>
              </div>
            </div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={DaveArthur}
						alt="DaveArthur"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Dave Arthur</p>
					<p style={{ margin: 0 }}>2025</p>
				</div>
				<div className="image-and-text">
					<img
						src={FarleyWall}
						alt="FarleyWall"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Farley Wall</p>
					<p style={{ margin: 0 }}>2025</p>
				</div>
			</div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={ReedMalcolm}
						alt="ReedMalcolm"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Reed Malcolm</p>
					<p style={{ margin: 0 }}>2025</p>
				</div>
				<div className="image-and-text">
					<img
						src={AliyaBekshenova}
						alt="AliyaBekshenova"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Aliya Bekshenova</p>
					<p style={{ margin: 0 }}>2026</p>
				</div>
			</div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={CarsonWalters}
						alt="CarsonWalters"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Carson Walters</p>
					<p style={{ margin: 0 }}>2026</p>
				</div>
				<div className="image-and-text">
					<img
						src={GinaSong}
						alt="GinaSong"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Gina Song</p>
					<p style={{ margin: 0 }}>2026</p>
				</div>
			</div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={EdwardLee}
						alt="EdwardLee"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Edward Lee</p>
					<p style={{ margin: 0 }}>2027</p>
				</div>
				<div className="image-and-text">
					<img
						src={VictorJia}
						alt="VictorJia"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Victor Jia</p>
					<p style={{ margin: 0 }}>2027</p>
				</div>
			</div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "50px",
					fontSize: "6vmin"
                  }}
                >
                  Logistics Coordinators
                </h2>
              </div>
            </div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={KathrynJacksonJones}
						alt="KathrynJacksonJones"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Kathryn Jackson-Jones</p>
					<p style={{ margin: 0 }}>Postdoc</p>
				</div>
				<div className="image-and-text">
					<img
						src={ClaireShen}
						alt="ClaireShen"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Claire Shen</p>
					<p style={{ margin: 0 }}>2026</p>
				</div>
			</div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={VincentXiong}
						alt="VincentXiong"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Vincent Xiong</p>
					<p style={{ margin: 0 }}>2026</p>
				</div>
				<div className="image-and-text">
					<img
						src={WillBruner}
						alt="WillBruner"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Will Bruner</p>
					<p style={{ margin: 0 }}>2027</p>
				</div>
			</div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "50px",
					fontSize: "6vmin"
                  }}
                >
                  Volunteer Coordinators
                </h2>
              </div>
            </div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={DaveArthur}
						alt="DaveArthur"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Dave Arthur</p>
					<p style={{ margin: 0 }}>2026</p>
				</div>
				<div className="image-and-text">
					<img
						src={JasonChen}
						alt="JasonChen"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Jason Chen</p>
					<p style={{ margin: 0 }}>2026</p>
				</div>
			</div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "50px",
					fontSize: "6vmin"
                  }}
                >
                  Finance
                </h2>
              </div>
            </div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={JoanneLi}
						alt="JoanneLi"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Joanne Li</p>
					<p style={{ margin: 0 }}>2025</p>
				</div>
				{windowWidth >= 866 ? (
					<div className="image-and-text">
					<img
						src={Purple}
						alt="Purple"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
				</div>
				) : null }
			</div>
			<div style={{ width: "100%" }}>
              <div>
                <h2
                  style={{
                    marginBottom: "50px",
					fontSize: "6vmin"
                  }}
                >
                  Technology
                </h2>
              </div>
            </div>
			<div className="image-holder">
				<div className="image-and-text">
					<img
						src={MichaelKim}
						alt="MichaelKim"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
					<p style={{ margin: "20px 0 0 0", fontSize: "4vmin", fontWeight: 600 }}>Michael Kim</p>
					<p style={{ margin: 0 }}>2025</p>
				</div>
				{windowWidth >= 866 ? (
					<div className="image-and-text">
					<img
						src={Purple}
						alt="Purple"
						style={{
							width: "80%",
							height: "80%"
						}}
					/>
				</div>
				) : null }
			</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitational;
