import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductInCart = ({ product, removeprod, handeladdprod, handledecprod, t }) => {
    const [quant, setQuant] = useState(1)

    return (
        <div key={product.id} className='main-prod-INcart'>
            <div className="cartproduct align-items-center">
                <div className="cartimg">
                    <img src={product.image}></img>
                </div>
                <div className="boxcontent">
                    <div>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </div>
                </div>
                <div className="cart-prod-price">
                    {(product.price * product.quantity).toFixed(2)} {t("cart.total_curency")}
                </div>
                <div className="basketdiv">
                    <i
                        onClick={() => { removeprod(product) }}
                        className="fa-solid fa-xmark">
                    </i>
                </div>
            </div >
            <div style={{ gap: "20px" }} className='mt-2 mb-2 d-flex align-items-center justify-content-center'>

                <div style={{ gap: "30px" }} className='quantity-div d-flex align-items-center justify-content-between'>
                    <span>{t("cart.quantity")} : </span>
                    <span style={{ cursor: "pointer" }} onClick={() => handeladdprod(product)}><i className="plus-count fa-solid fa-plus"></i></span>
                    <span>{product.quantity}</span>
                    <span style={{ cursor: "pointer" }} onClick={() => handledecprod(product)}><i className="plus-count fa-solid fa-minus"></i></span>
                </div>
            </div>
        </div>
    )
}

export default ProductInCart