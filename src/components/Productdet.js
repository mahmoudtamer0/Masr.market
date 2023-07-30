import { Link } from "react-router-dom";
import './proddet.css'
function Productdet(props) {
    const { product, showButton } = props;
    // console.log(product)
    return (
        <div className="container">
            <div className="card card-product">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
                </div>
            </div >
        </div>
    )
}

export default Productdet;