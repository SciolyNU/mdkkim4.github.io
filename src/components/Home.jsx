import React from "react";
import Arch from "./Arch.png";

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
                justifyContent: "center",
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
        </div>
      </div>
    </div>
  );
}

export default Home;
