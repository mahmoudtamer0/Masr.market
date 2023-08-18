import React from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const Product = ({ product, handeladdprod, cart }) => {
    const [added, setAdded] = useState(false)

    useEffect(() => {
        const find = cart.find(item => item.id === product.id)
        find ? setAdded(true) : setAdded(false)
    }, [])

    const handleclick = (product) => {
        handeladdprod(product)
        const find = cart.find(item => item.id === product.id)
        if (find) {
            setAdded(true);
        } else setAdded(true);
    }
    return (
        <div className="col-lg-3 col-12 col-md-4 col-sm-6" key={product.id}>
            <div style={{ minHeight: "500px" }} className="card card-product">
                <img src={product.image} loading='lazy' className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className='mt-2 mb-2 prod-category'>{product.category}</p>
                    <Link className="mt-2 mb-2 title-card" to={`/products/${product.id}`}>{product.title.length > 30 ? `${product.title.slice(0, 30)}...` : product.title.slice(0, 30)}</Link>
                    <p className=" mt-2 mb-2 card-text">{product.description.length > 34 ? `${product.description.slice(0, 34)}...` : `${product.description}`}</p>
                    <div className='justify-content-start align-items-center prod-prices'>
                        <span style={{ marginLeft: "8px" }} className=' prod-price'>{product.price} ج م</span>
                        {product.discount_rate && <span className='prod-disc'>{product.discount_rate} ج م</span>}
                    </div>
                    <div className='d-flex actions-div'>
                        {added ?
                            <Link to="/cart" className=' added-btn prod-add d-flex justify-content-center align-items-center'>
                                <span>تم اضافته</span>
                                <span><i style={{ color: "#62D0B6" }} className="fa-solid fa-check"></i></span>
                            </Link> :
                            <button onClick={() => handleclick(product)} className='prod-add d-flex justify-content-center align-items-center'>
                                <span><i className="fa-solid fa-cart-plus"></i></span>
                                <span>اضف للسلة</span>
                            </button>}
                        <button className='prod-fav'><i className="fa-regular fa-heart"></i></button>
                    </div>
                    <div className='prod-details-btn'>
                        <Link to={`/products/${product.id}`} className='prod-add d-flex justify-content-center align-items-center'>
                            تفاصيل المنتج
                        </Link>
                    </div>

                </div>
            </div >
        </div>

    )
}

export default Product