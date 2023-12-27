import React from "react";
import Footer from "./Footer";

function Volunteer() {
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
						Get Involved
					</h1>
					<p
						style={{
							marginTop: "50px",
							marginBottom: "0px"
						}}
					>
						Achieving our mission and creating experiences for science-loving high school students is made possible through the incredible work of volunteers and executive board members.
						If you're interested in helping out in any capacity, please reach out to us by filling out our interest form below and join our Discord server to get updates! 
					</p>
					</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: "50px"
				}}
			>
				<div className="button" style={{ marginRight: "50px" }}>
					INTEREST FORM
				</div>
				<div className="button">
					DISCORD SERVER
				</div>
			</div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
