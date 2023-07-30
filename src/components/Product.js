import { Link } from "react-router-dom";
function Product(props) {
    const { product, showButton } = props;
    // console.log(product)
    return (
        <div className="card card-product">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h6>price : {product.price}$</h6>
                {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
            </div>
        </div >
    )
}

export default Product;