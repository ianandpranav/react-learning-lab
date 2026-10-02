function JSXTemplateLiteral() {

    const name = "Anand";
    const course = "React";

    const message = `My name is ${name} and I am learning ${course}.`;

    return (
        <div>
            <h1>Template Literal in JSX</h1>
            <p>{message}</p>
        </div>
    );
}

export default JSXTemplateLiteral;
