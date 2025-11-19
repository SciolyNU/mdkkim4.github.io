function Invitational() {
  	return (
		<div className="home">
			<div className="first-section">
				<div className="section-title">
				<div style={{ zIndex: 1 }}>
					<h1>
					2026 Invitational
					</h1>
					<hr class="solid"/>
					<p>
					Our fifth annual Northwestern Invitational will take place in-person at our Evanston campus on February 21st, 2026. Check back for more information leading up to the tournament date.
					</p>
					<div
					style={{
						display: "flex",
						flexDirection: "row",
						marginTop: "50px"
					}}
					>
						<a href={'https://www.northwestern.edu/docs/admissions/ev_campusmap.pdf'}>
							<div className="button" style={{ marginRight: "50px", marginBottom: "25px" }}>
								CAMPUS MAP
							</div>
						</a>
					</div>
				</div>
				</div>
			</div>
			<div className="first-section">
				<div className="second-section">
				<div style={{ zIndex: 1 }}>
					<h1>
					Tournament Information
					</h1>
					<hr class="solid"/>
					<p
					style={{
						marginTop: "50px"
					}}
					>
					To see information on the tournament's events and participating schools, visit the Scilympiad link below. There will be more information available before the tournament as well.
					</p>
					<div
					style={{
						display: "flex",
						flexDirection: "row",
						marginTop: "50px"
					}}
					>
						<a href={'https://scilympiad.com/il-nu'}>
							<div className="button" style={{ marginRight: "50px", marginBottom: "25px" }}>
								SCILYMPIAD
							</div>
						</a>
					</div>
				</div>
				</div>
			</div>
		</div> 
	);
}

export default Invitational;
