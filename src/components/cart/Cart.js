import ClipLoader from "react-spinners/ClipLoader";
import './cart.css'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import ProductInCart from "./ProductInCart";
import { useTranslation } from "react-i18next";
function Cart(props) {
    //states
    const { products, removeprod, tax, totalprods,
        total, deleviery, loadingForCart, handeladdprod, handledecprod } = props;
    const [loading, setLoading] = useState(false);
    const [t, i18next] = useTranslation()
    //end states

    let totalquantity = 0;
    products.map(prod => totalquantity += prod.quantity)

    //functions
    useEffect(() => {
        setLoading(true)
    }, [])
    //end functions
    return (
        <div className="maincart">
            <div className="container">
                <div className="cart-links">
                    <NavLink className='cart-link' to='/'>{t("cart.links_main")}</NavLink >
                    <span>/</span>
                    <NavLink className='cart-link' to='/cart'>{t("cart.links_cart")}</NavLink >
                </div>
                <div className="row prod-reset">
                    <div className="d-flex justify-content-center align-items-center
                                        prods col-lg-7 col-md-7 col-sm-12 col-12">
                        {loadingForCart &&
                            <div className="text-center">
                                <ClipLoader
                                    color='#62D0B6'
                                    loading={loading}
                                    size={80}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                                <div className='mt-3'>
                                    .... Please wait a moment
                                </div>
                            </div>}
                        <div className={loadingForCart ? 'd-none' : 'd-block w-100'}>
                            {products && products.map(product => {
                                return (
                                    <ProductInCart
                                        t={t}
                                        key={product.id}
                                        removeprod={removeprod}
                                        handledecprod={handledecprod}
                                        handeladdprod={handeladdprod}
                                        product={product} />
                                )
                            })}
                        </div>
                    </div>
                    {
                        products.length >= 1 &&
                        <div className="col-12 col-lg-3 col-md-3 col-sm-12  reset-div">
                            <h2>{t("cart.reset_title")} </h2>
                            <div><span>{t("cart.reset_title2")} ({totalquantity})</span> <span>{totalprods.toFixed(2)} {t("cart.total_curency")}</span></div>
                            <div><span>{t("cart.reset_title3")}(14%) </span>{tax} {t("cart.total_curency")}</div>
                            <div><span>{t("cart.reset_title4")} </span>{deleviery} {t("cart.total_curency")}</div>
                            <div className="promoinp">
                                <input type="text" placeholder={t("cart.reset_title5")} />
                                <button>{t("cart.reset_btn")}</button>
                            </div>
                            <div className="total-div">
                                <span className="word">{t("cart.total_price")}</span>
                                <span className="num">{parseFloat(+total).toFixed(2)} {t("cart.total_curency")}</span>

                            </div>
                            <p className="tax-attention">{t("cart.total_desc")}</p>

                            <div className="checkout"><button>{t("cart.checkout")}</button></div>

                        </div>
                    }
                </div>
                {products.length < 1 &&
                    <div className="noprod">
                        <div><i className="fa-solid fa-bag-shopping"></i></div>
                        <h4 className="text-center">{t("cart.empty_title")}</h4>
                        <h5 className="text-center">{t("cart.empty_desc")}</h5>
                    </div>
                }
            </div >

        </div >

    )
}

export default Cart;