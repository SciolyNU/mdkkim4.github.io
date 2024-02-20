import React, { useState, useEffect } from "react";

function Contact() {
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
									Contact Us
								</h1>
								<hr class="solid"/>
								<p
									style={{
										marginTop: "50px",
										marginBottom: "0px"
									}}
								>
									If you have any questions about Northwestern University Science Olympiad (NUSO) or our upcoming invitational, please feel free to email us! You can also check out our Scilympiad for more 
									information on our upcoming invitational and registration updates.
								</p>
							</div>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: windowWidth < 500 ? "column" : "row",
							marginTop: "50px"
						}}
					>
						<a href={'mailto:recipient@example.com'}>
							<div className="button" style={{ marginRight: "50px", marginBottom: "25px" }}>
								OUR EMAIL
							</div>
						</a>
						<a href={'https://scilympiad.com/il-nu'}>
							<div className="button">
								SCILYMPIAD
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
