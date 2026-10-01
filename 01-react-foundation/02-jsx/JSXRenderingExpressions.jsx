function JSXRenderingExpressions() {

    const name = "Anand";
    const age = 23;
    const isStudent = true;

    return (
        <div>
            <h1>React Profile</h1>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default JSXRenderingExpressions;
