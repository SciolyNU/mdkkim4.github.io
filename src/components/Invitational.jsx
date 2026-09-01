import logo_chem from "./logo_chem.png";
import logo_fisher from "./logo_fisher.png";
import logo_ibis from "./logo_ibis.svg";
import logo_isp from "./logo_isp.webp";
import logo_mmss from "./logo_mmss.png"
import SponsorImage from "./SponsorImage";
import SponsorImageSecondary from "./SponsorImageSecondary"
import ExecTitle from "./ExecTitle";


function Invitational() {
  	return (
		<div className="home">
			<div className="first-section">
				<div className="section-title">
				<div style={{ zIndex: 1 }}>
					<h1> 2027 Invitational </h1>
					<hr class="solid"/>
					<p>
					Our website and Scilympiad are currently being updated. Stay tuned!
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
					We are excited to announce that the 2027 NUSO Division C Invitational will be held on Saturday, February 20th, 2027! Registration for the invitational will open on Friday, October 2nd, 2026, at 2:00 PM CST through our Scilympiad page.
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
			<div className="first-section">
				<div className="section-title">
				<div style={{ zIndex: 1 }}>
					<h1>
					Our Sponsors
					</h1>
					<hr class="solid"/>
					<p>
					The tournament would not be possible without support from our sponsors, shown below.
					</p>
					<ExecTitle title="Primary Sponsors"/>
						<div className="image-holder">
							<a href="https://chemistry.northwestern.edu/"><SponsorImage image={logo_chem} nametxt="NU Chemistry Department"/></a>
							<a href="https://www.fishersci.com/us/en/home.html"><SponsorImage image={logo_fisher} nametxt="Fisher Scientific"/></a>
							<a href="https://mmss.northwestern.edu/"><SponsorImage image={logo_mmss} nametxt="NU MMSS"/></a>
						</div>
						<ExecTitle title="Secondary Sponsors"/>
						<div className="image-holder">
							<a href="https://ibis.northwestern.edu/"><SponsorImageSecondary image={logo_ibis} nametxt="NU IBiS"/></a>
							<a href="https://isp.northwestern.edu/"><SponsorImageSecondary image={logo_isp} nametxt="NU ISP"/></a>
						</div>
				</div>
				</div>
			</div>

		</div> 
	);
}

export default Invitational;
