function JSXEventHandler() {

    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <div>
            <h1>JSX Event Handler</h1>

            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default JSXEventHandler;
