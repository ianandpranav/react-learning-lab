function JSXLogicalOperator() {

    const isLoggedIn = true;
    const isAdmin = true;

    return (
        <div>
            <h1>Logical Operators in JSX</h1>

            {isLoggedIn && <p>Welcome back!</p>}

            {isAdmin && <p>You have admin access.</p>}
        </div>
    );
}

export default JSXLogicalOperator;
