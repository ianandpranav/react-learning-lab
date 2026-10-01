function JSXStyleAttribute() {

    const headingStyle = {
        color: "blue",
        fontSize: "30px",
        textAlign: "center"
    };

    return (
        <div>
            <h1 style={headingStyle}>
                React Learning Lab
            </h1>

            <p>
                Learning inline styles in JSX.
            </p>
        </div>
    );
}

export default JSXStyleAttribute;
