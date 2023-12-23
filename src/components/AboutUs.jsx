import React from "react";
import Arch from "./Arch2.png";
import Home1 from "./Home1.png";
import Home2 from "./Home2.png";
import Footer from "./Footer";

function AboutUs() {
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
				marginLeft: "calc(max(10px, 100vw - 1280px))",
				marginRight: "calc(max(10px, 100vw - 1280px))"
			  }}
			>
			  <div className="first-section" style={{ flexDirection: "column" }}>
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
					maxWidth: "415px",
					maxHeight: "448.7px"
				  }}
				/>
			  </div>
			  <div className="second-section">
				<img
				  src={Home1}
				  alt="Home1"
				  style={{ 
					maxWidth: "27.5%",
					height: "27.5%" 
				  }}
				/>
				<div style={{ width: "60%" }}>
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
					<div className="button">
						INVITATIONAL INFORMATION
					</div>
				  </div>
				</div>
			  </div>
			  <div className="second-section">
				<div style={{ width: "60%" }}>
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
					  Join our growing community of undergraduate students, researchers, and faculty as we prepare for our upcoming invitational!
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
					maxWidth: "27.5%",
					height: "27.5%" 
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

export default AboutUs;
