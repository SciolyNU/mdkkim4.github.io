function SponsorImage(props) {
	return(
	<div className="image-and-text">
        <p
			style={{
				textAlign: "center",
                fontWeight: "bold"
			}}
		>
            {props.nametxt}
        </p>
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
