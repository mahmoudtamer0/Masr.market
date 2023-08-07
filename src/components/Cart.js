import { useEffect, useRef, useState } from "react"
import axios from "axios"
import Navbar from './Navbar'

function Cart() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsInCart()
    }, [])

    let totalprods = 0;
    products.map(prod => { return (totalprods += prod.price) })
    let tax = Math.floor(totalprods * 0.14);
    let deleviery = 7;
    let discount = 0;
    let total = (totalprods + tax + deleviery) - discount

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
                <div className="row prod-reset">
                    <div className="prods col-lg-7 col-md-7 col-sm-12 col-12">
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
                                                <select >
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
                    <div className="col-12 col-lg-3 col-md-3 col-sm-12  reset-div">
                        <h2>Reset</h2>

                        <div><span>Products Price: </span> <span>{totalprods}$</span></div>
                        <div><span>Tax(14%): </span>{tax}$</div>
                        <div><span>Deleviery: </span>{deleviery}$</div>
                        <div><span>Discount: </span>{discount}$</div>
                        <div className="total-div"><span className="word">Total: </span><span className="num">{parseFloat(+total).toFixed(2)}$</span></div>
                    </div>
                </div >
            </div >
            <div className="navincart"><Navbar /></div>
        </div>

    )
}

export default Cart;