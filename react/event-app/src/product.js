function product() {
    const myStyle = {
        color: "brown",
        backgroundColor: "white",
        border: "2px solid red",
        height: "20px",
        width: "100px",
        marginBottom: "10px",
    };

    return (
        <div>
            <div style={myStyle}>Vishal</div>
            <div style={myStyle}>Shweta</div>
            <div style={myStyle}>Meena</div>
            <div style={myStyle}>Reena</div>
        </div>
    );
}

export default product;