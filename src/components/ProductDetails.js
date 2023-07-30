import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Productdet from "./Productdet";

function ProductDetails() {
    const params = useParams();
    const api_url = 'https://fakestoreapi.com/products';

    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then(res => res.json()).then(data => setProducts(data))
    }, [])
    return (
        <Productdet product={product} showButton={false} />
    )
}

export default ProductDetails