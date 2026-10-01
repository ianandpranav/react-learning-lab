function JSXAttributes() {

    const imageUrl = "https://via.placeholder.com/150";
    const imageAlt = "Placeholder image";

    return (
        <div>
            <h1>JSX Attributes</h1>

            <img
                src={imageUrl}
                alt={imageAlt}
            />

            <p className="student-name">
                React Student
            </p>
        </div>
    );
}

export default JSXAttributes;
