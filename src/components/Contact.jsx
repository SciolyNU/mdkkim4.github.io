import React from "react";

function ContactUs() {
  return (
    <div className="contact-us">
			<section style={{
				width: '100vw', 
				height: '57.5vh',
        backgroundImage: 'url("https://lh3.googleusercontent.com/vNqVsV9QfIl5aUeCupfP_FCysVshGorOeiZAuNqE2LE4xjylYOulfoA_aBNJ8yhkxm0_mMkgBf0eXHlPAEhOBVh49GAVfz3-FhmCV4YBmDGpEIHo_D57P6_pc1_63CSnLIgIgki8TQ=w2400")',
				backgroundSize: 'cover',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<p style={{
					fontSize: '10vmin',
					textAlign: 'center',
					color: "#fff",
					fontWeight: 700,
					fontFamily: '"Campton Book","Tahoma",sans-serif',
          letterSpacing: 2
				}}>
					About Our Organization
				</p> 
			</section>
			<p style={{
				fontSize: '6vmin',
				textAlign: 'center',
				fontWeight: 700,
				fontFamily: '"Campton Book","Tahoma",sans-serif',
				marginRight: "125px",
				marginLeft: "125px",
        paddingTop: "30px",
        color: "#3c3c3c"
			}}>
				Memorable experiences to empower the next generation of leaders and learners in science
			</p> 
			<p style={{
				fontSize: '2.75vmin',
				textAlign: 'left',
				fontWeight: 500,
				fontFamily: '"Campton Book","Tahoma",sans-serif',
				marginRight: "75px",
				marginLeft: "75px",
        color: "#777",
        paddingTop: "30px",
        paddingBottom: "30px"
			}}>
				Northwestern University Science Olympiad (NUSO) was founded in the spring of 2021 as a passionate community of Science Olympiad 
				alumni and STEM enthusiasts committed to enriching Science Olympiad in Illinois and the greater Midwest region. Based at our 
				nationally-recognized Evanston campus, we're focused on delivering a high-level of competition and fostering a love for the 
				sciences.<br/><br/>
				
				As a team, we work year-round on initiatives aimed at achieving our vision: to provide students with unforgettable Science Olympiad 
				experiences that cement their passions for lifelong learning. We can't wait to see you this coming February in 2024 for our third NUSO 
				Invitational! *ADD IN MORE INFO HERE
			</p> 
			{/* <section style={{
				width: '100vw', 
				height: '25vh',
				backgroundColor: "#4E2A84",
				backgroundSize: 'cover',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<p style={{
					fontSize: '10vmin',
					textAlign: 'center',
					color: "#fff",
					fontWeight: 700,
					fontFamily: '"Campton Book","Tahoma",sans-serif',
				}}>
					2023-2024 Executive Board
				</p> 
			</section> */}
        </div>
  );
}

export default ContactUs;
