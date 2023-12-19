import React from "react";
import Arch from "./Arch.png";
import Home1 from "./Home1.png";
import Home2 from "./Home2.png";

function Home() {
  return (
    <div className="home">
      <div 
				style={{
					minWidth: "100vw",
					minHeight: "100vh",
					position: "relative",
					overflow: "hidden"
				}}
			>
        <div 
          style={{ 
            marginLeft: "160px",
            marginRight: "160px"
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
              <img
                src={Arch}
                alt="Arch"
                style={{ 
                  maxWidth: "100%",
                  height: "auto", 
                  position: "absolute",
                  top: 49,
                  right: 160 }}
              />
              <div style={{ zIndex: 1 }}>
                <h1>
                  Northwestern University<br></br>Science Olympiad
                </h1>
                <p
                  style={{
                    marginTop: "30px",
                  }}
                >
                  February 24th, 2024
                </p>
              </div>
            </div>
          </div>
          <div className="second-section">
            <img
              src={Home1}
              alt="Home1"
              style={{ 
                maxWidth: "100%",
                height: "100%" 
              }}
            />
            <div style={{ width: "60%" }}>
              <div
                style={{
                  position: "relative",
                  marginBottom: "36.5px"
                }}
              >
                <h2
                  style={{
                    fontSize: "64px",
                    fontFamily: "Bitter, serif",
                    fontWeight: "bold",
                    color: "#1b4332",
                    margin: "0px"
                  }}
                >
                  About me<span style={{ color: "#52b788" }}>.</span>
                </h2>
                <div
                  style={{
                    width: "80px",
                    height: "3.5px",
                    backgroundColor: "#52b788",
                    marginTop: "10px"
                  }}
                ></div>
              </div>
              <div
                style={{
                  margin: "0px auto",
                  position: "relative"
                }}
              >
                <p
                  style={{
                    fontSize: "17px",
                    marginTop: "0px",
                    lineHeight: 1.65,
                    color: "#1b4332",
                    marginBottom: "25px"
                  }}
                >
                  I’m a <b>third-year undergraduate student</b> at Northwestern University, pursuing a B.A. in Biology and Data Science 
                  and an M.S. in Computer Science through a B.A./M.S. program.<br/><br/>
                  While initially exploring investment banking and venture capital internships, I found myself far more passionate 
                  about the transformative work of the startups I was actually advising and sourcing. Since then, I’ve been fortunate to build 
                  software for a <b>multiomics research lab</b>, a <b>venture capital firm</b>, and a <b>startup</b>. I'm eager to continue 
                  imparting meaningful impact, particularly at innovative and disruptive startups.<br/><br/>
                  Currently, I’m leading a project at the <b>Proteomics Center of Excellence</b> to reverse engineer and improve Thermo Fisher Scientific’s mass 
                  spectrometry software. On the side, I’ve been creating a multiomics quality control tool with <b>autoencoder neural network models</b>.<br/><br/>
                  While I’m not coding, I enjoy playing tennis, learning new languages, spending time outdoors with friends, and reading books on human behavior. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
