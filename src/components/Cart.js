import ClipLoader from "react-spinners/ClipLoader";
import './cart.css'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import ProductInCart from "./ProductInCart";
function Cart(props) {
    //states
    const { products, removeprod, tax, totalprods,
        total, deleviery, loadingForCart, handeladdprod, handledecprod } = props;
    const [loading, setLoading] = useState(false);
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
                    <NavLink className='cart-link' to='/'>الرئيسية</NavLink >
                    <span>/</span>
                    <NavLink className='cart-link' to='/cart'>سلة المشتريات</NavLink >
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
                                    <ProductInCart removeprod={removeprod} handledecprod={handledecprod} handeladdprod={handeladdprod} product={product} />
                                )
                            })}
                        </div>
                    </div>
                    {
                        products.length >= 1 &&
                        <div className="col-12 col-lg-3 col-md-3 col-sm-12  reset-div">
                            <h2>ملخص الطلب</h2>
                            <div><span>مجموع المنتجات ({totalquantity})</span> <span>{totalprods.toFixed(2)} ج.م</span></div>
                            <div><span>ضريبة(14%) </span>{tax} ج.م</div>
                            <div><span>التوصيل </span>{deleviery} ج.م</div>
                            <div className="promoinp">
                                <input type="text" placeholder="هل لديك كود خصم" />
                                <button>اضافة</button>
                            </div>
                            <div className="total-div">
                                <span className="word">الاجمالي </span>
                                <span className="num">{parseFloat(+total).toFixed(2)} ج.م</span>

                            </div>
                            <p className="tax-attention">الاسعار شاملة للضريبة</p>

                            <div className="checkout"><button>اتمام الطلب</button></div>

                        </div>
                    }
                </div>
                {products.length < 1 &&
                    <div className="noprod">
                        <div><i className="fa-solid fa-bag-shopping"></i></div>
                        <h4 className="text-center">السلة فارغة</h4>
                        <h5 className="text-center">لا توجد منتجات حتي الان</h5>
                    </div>
                }
            </div >

        </div >

    )
}

export default Cart;