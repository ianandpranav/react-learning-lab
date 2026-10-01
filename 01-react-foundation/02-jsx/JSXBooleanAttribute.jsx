function JSXBooleanAttribute() {

    const isDisabled = true;

    return (
        <div>
            <h1>JSX Boolean Attribute</h1>

            <button disabled={isDisabled}>
                Submit
            </button>
        </div>
    );
}

export default JSXBooleanAttribute;
