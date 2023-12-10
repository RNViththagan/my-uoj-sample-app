const Product = ({ title, description, price, handleAdd }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <p>{price}</p>
            <button onClick={() => handleAdd()}>Add to Cart</button>
        </div>
    )
}

export default Product;