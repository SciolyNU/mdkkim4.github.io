function ExecImage(props) {
	return(
	<div className="image-and-text">
		<img
			src={props.image}
			alt={props.nametxt}
			style={{
				width: "80%",
				height: "80%"
			}}
		/>
		<h3
			style={{
				textAlign: "center"
			}}
		>{props.nametxt}</h3>
		<p style={{ margin: 0 }}>{props.year}</p>
		<br></br>
	</div>
	);
}
export default ExecImage;
