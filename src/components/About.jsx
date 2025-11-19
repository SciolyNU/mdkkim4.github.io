import About1 from "./About1.jpg";
import About2 from "./About2.jpg";
import Carson_Walters from "./Carson_Walters.jpg";
import Duyen_Millon from "./Duyen_Millon.jpg";
import Dave_Arthur from "./Dave_Arthur.jpg";
import Edward_Lee from "./Edward_Lee.jpg";
import Gina_Song from "./Gina_Song.jpg";
import Kaylen_Ng from "./Kaylen_Ng.jpg";
import Tate_Darin from "./Tate_Darin.jpg";
import Katya_Nogin from "./Katya_Nogin.jpg";
import Jolly_Patro from "./Jolly_Patro.jpg";
import Stephen_Walsh from "./Stephen_Walsh.jpg";
import Sudeep_Chitrothu from "./Sudeep_Chitrothu.jpg";
import Rithik_Khanna from "./Rithik_Khanna.jpg";
import Jacob_Wood from "./Jacob_Wood.jpg";
import Rachel_Yoon from "./Rachel_Yoon.jpg";
import Ryan_Xu from "./Ryan_Xu.jpg";
import Shoki_Matsushima from "./Shoki_Matsushima.jpg";
import Victor_Jia from "./Victor_Jia.jpg";
import Yiyao_Du from "./Yiyao_Du.jpg"
import ExecImage from "./ExecImage";
import ExecTitle from "./ExecTitle";

function About() {
  return (
	<div className="home">
		<div className="first-section">
			<div style={{ zIndex: 1 }}>
			<h1>
				About Us
			</h1>
			<hr class="solid"/>
			<p
				style={{
				marginTop: "50px"
				}}
			>
				Northwestern University Science Olympiad (NUSO) was founded in 2021 with a mission to better our surrounding 
				Science Olympiad community. Composed of Science Olympiad alums and STEM-loving folks, we strive to bring quality competition 
				to our nationally-recognized campus. As a dedicated team, we work year-round on initiatives to realize our goal and create 
				memorable Science Olympiad experiences for students.<br/><br/>We are currently preparing for our fifth annual Northwestern Invitational 
				on February 21st, 2026.
			</p>
			</div>
		</div>
		<div className="second-section">
		<div style={{ width: window.innerWidth < 866 ? "100%" : "60%" }}>
			<div>
			<h3>
				OUR COMPETITION
			</h3>
			<h2>
				About The Invitational
			</h2>
			<p>
				We host a Division C tournament with all 23 national events at our incredible Evanston campus. All tests are written by undergraduates, graduates, and faculty, 
				many of whom are Science Olympiad alums that competed at the highest levels.
			</p>
			<br></br>
			<a href={'invitational'}>
				<div className="button">
					2026 INVITATIONAL INFORMATION
				</div>
			</a>
			</div>
		</div>
		{window.innerWidth >= 866 ? (
			<img
			src={About2}
			alt="About2"
			style={{ 
				maxWidth: window.innerWidth < 866 ? "60%" : "32.5%",
				height: window.innerWidth < 866 ? "60%" : "32.5%",
				marginTop: window.innerWidth < 866 ? "100px" : "0px"
			}}
			/>
		) : null}
		</div>
		<div className="second-section">
		{window.innerWidth >= 866 ? (
			<img
			src={About1}
			alt="About1"
			style={{ 
				maxWidth: window.innerWidth < 866 ? "60%" : "32.5%",
				height: window.innerWidth < 866 ? "60%" : "32.5%",
				marginBottom: window.innerWidth < 866 ? "100px" : "0px"
			}}
			/>
		) : null}
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
			<a href={'contact-us'}>
				<div className="button">
					CONTACT US
				</div>
			</a>
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
				marginBottom: "1.5rem"
				}}
			>
				Our executive board works year-round to achieve our mission through our annual invitational and other Science Olympiad initiatives. 
				Our organization is also supported by the incredible work of our large community of volunteers that help write tests and run events on 
				tournament day.
			</p>
			</div>
			<hr class="solid"/>
		</div>
		</div>
		<div className="image-section">
		<ExecTitle title="Tournament Directors"/>
		<div className="image-holder">
			<ExecImage image={Gina_Song} nametxt="Gina Song" year="2026"/>
			<ExecImage image={Victor_Jia} nametxt="Victor Jia" year="2027"/>
			<ExecImage image={Rachel_Yoon} nametxt="Rachel Yoon" year="2028"/>
		</div>
		<ExecTitle title="Testing Event Coordinators"/>
		<div className="image-holder">
			<ExecImage image={Kaylen_Ng} nametxt="Kaylen Ng" year="2028"/>
			<ExecImage image={Tate_Darin} nametxt="Tate Darin" year="2028"/>
		</div>
		<ExecTitle title="Lab Event Coordinators"/>
		<div className="image-holder">
			<ExecImage image={Shoki_Matsushima} nametxt="Shoki Matsushima" year="2027"/>
			<ExecImage image={Edward_Lee} nametxt="Edward Lee" year="2027"/>
			<ExecImage image={Yiyao_Du} nametxt="Yiyao Du" year="2027"/>
		</div>
		<ExecTitle title="Build Event Coordinators"/>
		<div className="image-holder">
			<ExecImage image={Jacob_Wood} nametxt="Jacob Wood" year="2028"/>
			<ExecImage image={Ryan_Xu} nametxt="Ryan Xu" year="2028"/>
		</div>
		<ExecTitle title="Volunteer Cordinators"/>
		<div className="image-holder">
			<ExecImage image={Dave_Arthur} nametxt="Dave Arthur" year="2026"/>
			<ExecImage image={Duyen_Millon} nametxt="Duyen Millon" year="2028"/>
			<ExecImage image={Sudeep_Chitrothu} nametxt="Sudeep Chitrothu" year="2028"/>
		</div>
		<ExecTitle title="Social Media and Outreach Coordinators"/>
		<div className="image-holder">
			<ExecImage nametxt="Christina Feng" year="2027"/>
			<ExecImage nametxt="Jennifer Garland" year="Grad"/>
		</div>
		<ExecTitle title="Webmasters"/>
		<div className="image-holder">
			<ExecImage image={Carson_Walters} nametxt="Carson Walters" year="2026"/>
			<ExecImage image={Katya_Nogin} nametxt="Katya Nogin" year="2028"/>
			<ExecImage image={Rithik_Khanna} nametxt="Rithik Khanna" year="2027"/>
			<ExecImage image={Stephen_Walsh} nametxt="Stephen Walsh" year="2028"/>
		</div>
		<ExecTitle title="Finance"/>
		<div className="image-holder">
			<ExecImage nametxt="Neil Chen" year="2027"/>
		</div>
		<ExecTitle title="Advisor"/>
		<div className="image-holder">
			<ExecImage image={Jolly_Patro} nametxt="Jolly Patro" year="Grad"/>
		</div>
		<ExecTitle title="Junior Executives"/>
		<h3>Testing Events</h3>
		<p>Claire Gilliam 2028</p>
		<p>Rita Yu 2029</p>
		<h3>Lab Events</h3>
		<p>Carmen Hu 2029</p>
		<p>Mira Fessenden 2029</p>
		<h3>Build Events</h3>
		<p>Gabby Cesena 2028</p>
		<p>Kevin Huang 2029</p>
		<h3>Social Media and Outreach</h3>
		<p>Sarah Baek 2029</p>
		<p>William Fisher 2028</p>
		
		</div>
	</div>
  );
}

export default About;
