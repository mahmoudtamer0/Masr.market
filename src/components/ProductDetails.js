import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './proddet.css'
import axios from "axios";
import { useNavigate } from "react-router-dom"
function ProductDetails() {
    const { productId } = useParams();
    const api_url = 'https://btngan-data.onrender.com/products';
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`${api_url}/${productId}`)
            .then(res => res.json()).then(data => setProduct(data))
    }, [])
    let navigate = useNavigate()

    const addtoserver = () => {
        axios.post('https://btngan-data.onrender.com/cart', {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
        }).then(() => { navigate('/cart') })
    }

    return (
        <div className="container maincart">

            <h5>{product.title}</h5>
            <div className="imag-div">
                <img src={product.image} />
            </div>
            <p> {product.description}</p>
            <div className="pricediv">Price: <span className="spanprice">{product.price}$</span></div>
            <button className="cartbtn" onClick={() => addtoserver()}>Add to Cart</button>
        </div>
    )
}

export default ProductDetails