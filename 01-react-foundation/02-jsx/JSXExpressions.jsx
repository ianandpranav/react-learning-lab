function JSXExpressions() {

    const firstName = "Anand";
    const age = 23;
    const number1 = 10;
    const number2 = 20;

    return (
        <div>
            <h1>Student Information</h1>

            <p>Name: {firstName}</p>
            <p>Age: {age}</p>
            <p>Sum: {number1 + number2}</p>
            <p>Next Year Age: {age + 1}</p>
        </div>
    );
}

export default JSXExpressions;
