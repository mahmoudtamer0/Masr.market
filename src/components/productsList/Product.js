import React from 'react'
import './productlist.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from "react-i18next";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addprod } from '../../rtk/reducers/cart-slice';
import { addProductTofav, deletProductFav } from '../../rtk/reducers/fav-slice';
const Product = ({ product }) => {
    const dispatch = useDispatch()
    const [added, setAdded] = useState(false)
    const [addedfav, setAddedfav] = useState(false)
    const { t, i18n } = useTranslation();
    const cart = useSelector(state => state.cart)
    const fav = useSelector(state => state.fav)


    // handle cart page (add product and check)

    const handleclick = (product) => {
        dispatch(addprod(product))
        const find = cart.find(item => item.id === product.id)
        if (find) {
            setAdded(true);
        } else setAdded(true);
    }

    useEffect(() => {
        const findedInCart = cart.find(item => item.id === product.id)
        findedInCart ? setAdded(true) : setAdded(false)

    }, [])

    // handle favourite page (add or delete)

    const handleAddProductToFav = (product) => {
        const find = fav.find(item => item.id === product.id)
        if (find !== undefined) {
            dispatch(deletProductFav(product))
            setAddedfav(false)
        } else {
            dispatch(addProductTofav(product))
            setAddedfav(true)
        }
    }

    useEffect(() => {
        const findedInFav = fav.find(item => item.id === product.id)
        findedInFav ? setAddedfav(true) : setAddedfav(false)
    }, [])


    return (
        <div className="col-lg-3 col-12 col-md-4 col-sm-6" key={product.id}>
            <div style={{ minHeight: "" }} className="card card-product">
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
                                    onClick={() => handleAddProductToFav(product)}
                                    style={{ width: "20%", color: "red" }}
                                    className='prod-fav prodfavaction'
                                >
                                    <i className="fa-solid fa-heart">
                                    </i>
                                </button>
                                :
                                <button
                                    onClick={() => handleAddProductToFav(product)}
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