import React from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from "react-i18next";
import { useEffect } from 'react'
const Product = ({ setFave, fav, product, handeladdprod, cart, handeladdprodforfav, removeprodinfav }) => {

    const { t, i18n } = useTranslation();
    const [added, setAdded] = useState(false)
    const [addedfav, setAddedfav] = useState(false)

    const handleclick = (product) => {
        handeladdprod(product)
        const find = cart.find(item => item.id === product.id)
        console.log(find)
        if (find) {
            setAdded(true);
        } else setAdded(true);
    }

    useEffect(() => {
        const find = fav.find(item => item.id === product.id)
        find ? setAddedfav(true) : setAddedfav(false)
    }, [])

    const handleaddfav = (product) => {
        const find = fav.find(item => item.id === product.id)
        if (find !== undefined) {
            removeprodinfav(product)
            setAddedfav(false)
        } else {
            // setAddedfav(false)
            handeladdprodforfav(product)
            setAddedfav(true)
        }
    }



    return (
        <div className="col-lg-3 col-12 col-md-4 col-sm-6" key={product.id}>
            <div style={{ minHeight: "500px" }} className="card card-product">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className='mt-2 mb-2 prod-category'>{product.category}</p>
                    <Link className="mt-2 mb-2 title-card" to={`/products/${product.id}`}>{product.title.length > 30 ? `${product.title.slice(0, 30)}...` : product.title.slice(0, 30)}</Link>
                    <p className=" mt-2 mb-2 card-text">{product.description.length > 34 ? `${product.description.slice(0, 25)}...` : `${product.description}`}</p>
                    <div className='justify-content-start align-items-center prod-prices'>
                        <span style={{ marginLeft: "8px" }} className=' prod-price'>{product.price} {t("productsLists.price_curency")}</span>
                        {product.discount_rate && <span className='prod-disc'>{product.discount_rate} {t("productsLists.price_curency")}</span>}
                    </div>
                    <div className='d-flex actions-div'>
                        {added ?
                            <Link to="/cart" className='a-actions-div added-btn prod-add d-flex justify-content-center align-items-center'>
                                <span>{t("productsLists.added_btn")}</span>
                                <span><i style={{ color: "#62D0B6" }} className="fa-solid fa-check"></i></span>
                            </Link> :
                            <button onClick={() => handleclick(product)} className='prod-add d-flex justify-content-center align-items-center'>
                                <span><i className="fa-solid fa-cart-plus"></i></span>
                                <span>{t("productsLists.add_btn")}</span>
                            </button>}
                        {
                            addedfav ?
                                <button
                                    onClick={() => handleaddfav(product)}
                                    style={{ width: "20%", color: "red" }}
                                    className='prod-fav prodfavaction'
                                >
                                    <i className="fa-solid fa-heart">
                                    </i>
                                </button>
                                :
                                <button
                                    onClick={() => handleaddfav(product)}
                                    className='prod-fav prodfavaction'>
                                    <i className="fa-regular fa-heart"></i>
                                </button>

                        }

                    </div>
                    <div className='prod-details-btn'>
                        <Link to={`/products/${product.id}`} className='prod-add d-flex justify-content-center align-items-center'>
                            {t("productsLists.product_details")}
                        </Link>
                    </div>

                </div>
            </div >
        </div>

    )
}

export default Product