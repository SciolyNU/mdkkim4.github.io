function SponsorImage(props) {
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
	</div>
	);
}
export default SponsorImage;
