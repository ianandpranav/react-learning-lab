function JSXConditionalExpression() {

    const isLoggedIn = true;

    return (
        <div>
            <h1>Welcome</h1>

            <p>
                {isLoggedIn ? "User is logged in" : "Please log in"}
            </p>
        </div>
    );
}

export default JSXConditionalExpression;
