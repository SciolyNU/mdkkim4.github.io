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
						2024 Invitational
						</h1>
						<hr class="solid"/>
						<p
						style={{
							marginTop: "50px"
						}}
						>
						Our third annual Northwestern Invitational will take place in-person at our Evanston campus on February 24th, 2024. Please check back for new tournament updates and see important information below.
						</p>
					</div>
					</div>
				</div>
				{/* <div className="first-section">
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
					</div> */}
				</div>
			</div>
		</div> 
	);
}

export default Invitational;
