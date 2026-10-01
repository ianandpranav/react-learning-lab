function JSXJavaScriptExpressions() {

    const name = "Anand";
    const age = 23;
    const a = 10;
    const b = 20;

    return (
        <div>
            <h1>JavaScript Expressions in JSX</h1>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Sum: {a + b}</p>
            <p>Next Year: {age + 1}</p>
        </div>
    );
}

export default JSXJavaScriptExpressions;
