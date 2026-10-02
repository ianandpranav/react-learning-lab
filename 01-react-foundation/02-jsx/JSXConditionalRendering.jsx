function JSXConditionalRendering() {

    const isLoggedIn = true;

    return (
        <div>
            <h1>Dashboard</h1>

            {isLoggedIn ? (
                <p>Welcome to your dashboard.</p>
            ) : (
                <p>Please log in to continue.</p>
            )}
        </div>
    );
}

export default JSXConditionalRendering;
