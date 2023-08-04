import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './proddet.css'
import axios from "axios";
function ProductDetails() {
    const { productId } = useParams();
    const api_url = 'https://btngan-data.onrender.com/products';
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`${api_url}/${productId}`)
            .then(res => res.json()).then(data => setProduct(data))
    }, [])

    const addtoserver = () => {
        axios.post('https://btngan-data.onrender.com/cart', {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
        })
    }
    return (
        <div className="container">

            <h5>{product.title}</h5>
            <div className="imag-div">
                <img src={product.image} />
            </div>
            <p> {product.description}</p>
            <button onClick={() => addtoserver()}>add to cart</button>
        </div>
    )
}

export default ProductDetails