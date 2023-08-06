import { useEffect, useState } from "react"
import axios from "axios"

function Cart() {

    const [products, setProducts] = useState([])
    const [count, setCount] = useState(1)

    useEffect(() => {
        getProductsInCart()
    }, [])
    let total = 0;

    products.map(prod => { return (total += prod.price) })
    console.log(total)

    const getProductsInCart = () => {
        fetch('https://btngan-data.onrender.com/cart')
            .then(res => res.json())
            .then(data => { setProducts(data) })
    }
    const removeprod = (prodId) => {
        axios.delete(`https://btngan-data.onrender.com/cart/${prodId}`)
            .then(data => { getProductsInCart() })
    }


    return (
        <div className="maincart">
            <div className="container">
                <h2 className="text-center">Cart.</h2>
                <div className="row">
                    <div className="prods col-7">
                        {products.length !== 0 ? products.map(product => {
                            return (
                                <div className="cartproduct" key={product.id}>
                                    <div className="cartimg">
                                        <img src={product.image}></img>
                                    </div>
                                    <div className="boxcontent">
                                        <div>
                                            <h3>{product.title}</h3>
                                            <p>Price:  {product.price}$</p>
                                            <div className="counterdiv">
                                                <span>Count: </span>
                                                <select>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="basketdiv">
                                            <i onClick={() => { removeprod(product.id) }} class="fa-regular fa-trash-can"></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div className="noprod"><h4 className="text-center">no products selected</h4></div>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart;