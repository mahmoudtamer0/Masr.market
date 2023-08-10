import { useEffect, useRef, useState } from "react"
import axios from "axios"
import Navbar from './Navbar'
import './cart.css'
import { NavLink } from "react-router-dom"


function Cart(props) {

    const { products, removeprod, tax, totalprods, total, deleviery } = props;

    return (
        <div className="maincart">
            <div className="container">
                <div className="cart-links">
                    <NavLink className='cart-link' to='/'>الرئيسية</NavLink >
                    <span>/</span>
                    <NavLink className='cart-link' to='/cart'>سلة المشتريات</NavLink >
                </div>
                <div className="row prod-reset">

                    {products.length !== 0 ? products.map(product => {
                        return (
                            <div className="prods col-lg-7 col-md-7 col-sm-12 col-12">
                                <div className="cartproduct align-items-center" key={product.id}>
                                    <div className="cartimg">
                                        <img src={product.image}></img>
                                    </div>
                                    <div className="boxcontent">
                                        <div>
                                            <h3>{product.title}</h3>
                                        </div>
                                    </div>
                                    <div className="cart-prod-price">
                                        {product.price} ج.م
                                    </div>
                                    <div className="basketdiv">
                                        <i onClick={() => { removeprod(product.id) }} class="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                            </div>


                        )
                    }) :
                        <div className="noprod">
                            <div><i class="fa-solid fa-bag-shopping"></i></div>
                            <h4 className="text-center">السلة فارغة</h4>
                            <h5 className="text-center">لا توجد منتجات حتي الان</h5>
                        </div>}

                    {
                        products.length >= 1 &&
                        <div className="col-12 col-lg-3 col-md-3 col-sm-12  reset-div">
                            <h2>ملخص الطلب</h2>
                            <div><span>مجموع المنتجات </span> <span>{totalprods} ج.م</span></div>
                            <div><span>ضريبة(14%) </span>{tax} ج.م</div>
                            <div><span>التوصيل </span>{deleviery} ج.م</div>
                            <div className="promoinp"><input type="text" placeholder="هل لديك كود خصم" /><button>اضافة</button></div>
                            <div className="total-div">
                                <span className="word">الاجمالي </span>
                                <span className="num">{parseFloat(+total).toFixed(2)} ج.م</span>

                            </div>
                            <p className="tax-attention">الاسعار شاملة للضريبة</p>

                            <div className="checkout"><button>اتمام الطلب</button></div>

                        </div>
                    }



                </div>
            </div >

        </div >

    )
}

export default Cart;