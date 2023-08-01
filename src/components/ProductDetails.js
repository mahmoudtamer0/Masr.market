import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './proddet.css'
function ProductDetails() {
    const { productId } = useParams();
    const api_url = 'https://btngan-data.onrender.com/products';
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`${api_url}/${productId}`)
            .then(res => res.json()).then(data => setProduct(data))
    }, [])
    return (
        <div className="container">

            <h5>{product.title}</h5>
            <div className="imag-div">
                <img src={product.image} />
            </div>
            <p> {product.description}</p>
        </div>
    )
}

export default ProductDetails