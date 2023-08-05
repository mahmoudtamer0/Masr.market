import { useEffect, useState } from "react"
import axios from "axios"

function Cart() {

    const [products, setProducts] = useState([])
    const [count, setCount] = useState(1)

    useEffect(() => {
        getProductsInCart()
    }, [])

    const getProductsInCart = () => {
        fetch('https://btngan-data.onrender.com/cart')
            .then(res => res.json())
            .then(data => { setProducts(data) })
    }

    const countplus = () => {
        if (count < 5) {
            setCount(count + 1)
            document.getElementById('minuscounter').classList.remove('disa')
            document.getElementById('pluscounter').classList.remove('disa')
        } else if (count >= 5) {
            document.getElementById('pluscounter').classList.add('disa')
            return false
        }
    }

    const countminus = () => {
        if (count > 1) {
            setCount(count - 1)
            document.getElementById('minuscounter').classList.remove('disa')
        } else {
            document.getElementById('pluscounter').classList.remove('disa')
            document.getElementById('minuscounter').classList.add('disa')
            return false
        }
    }

    const removeprod = (prodId) => {
        axios.delete(`https://btngan-data.onrender.com/cart/${prodId}`)
            .then(data => { getProductsInCart() })
    }

    return (
        <div className="maincart">
            <div className="container">
                <h2 className="text-center">Cart.</h2>
                <div className="prods">
                    {products?.map(product => {
                        return (
                            <div className="cartproduct" key={product.id}>
                                <div className="cartimg">
                                    <img src={product.image}></img>
                                </div>
                                <div>
                                    <h3>{product.title.slice(0, 40)}..</h3>
                                    <p>Price:  {product.price}$</p>
                                    <div className="counterdiv">
                                        <span>Count: </span>
                                        <i id="minuscounter" className="fa-solid fa-circle-minus" onClick={() => countminus()}></i>
                                        <span>{count}</span>
                                        <i id="pluscounter" className="fa-solid fa-circle-plus" onClick={() => countplus()}></i>
                                    </div>
                                </div>
                                <div className="basketdiv">
                                    <i onClick={() => { removeprod(product.id) }} class="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart;