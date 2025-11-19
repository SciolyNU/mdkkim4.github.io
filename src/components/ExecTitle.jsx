function ExecTitle(props) {
    return(
    <div style={{ width: "100%" }}>
        <div>
            <h2
                style={{
                marginBottom: "50px",
                marginTop: "50px",
                textAlign: "center"
                }}
            >
                {props.title}
            </h2>
        </div>
    </div>
    );
}

export default ExecTitle;