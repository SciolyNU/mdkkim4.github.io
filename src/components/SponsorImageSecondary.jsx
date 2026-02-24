function SponsorImage(props) {
	return(
	<div className="image-and-text">
		<img
			src={props.image}
			alt={props.nametxt}
			style={{
				width: "200px",
                height: "auto"
			}}
		/>
	</div>
	);
}
export default SponsorImage;
