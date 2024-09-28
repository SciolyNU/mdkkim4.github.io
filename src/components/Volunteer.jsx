import React, { useState, useEffect } from "react";
import Footer from "./Footer";

function Volunteer() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
	  const handleResize = () => {
		setWindowWidth(window.innerWidth);
	  };
  
	  window.addEventListener('resize', handleResize);
  
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
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
						Get Involved
					</h1>
					<hr class="solid"/>
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
					flexDirection: windowWidth < 500 ? "column" : "row",
					marginTop: "50px",
				}}
			>
				<a href={'https://forms.gle/8Z16TaUokaEN2S2A6'}>
					<div className="button" style={{ marginRight: "50px", marginBottom: "25px" }}>
						INTEREST FORM
					</div>
				</a>
				<a href={'https://discord.gg/c4Pxt7zGVd'}>
					<div className="button">
						DISCORD SERVER
					</div>
				</a>
			</div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
