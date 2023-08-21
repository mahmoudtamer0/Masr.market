import ClipLoader from "react-spinners/ClipLoader";
import '../cart/cart.css'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import ProductInfav from "./ProductInfav";
function Favourites({ fav, loadingForFav, removeprodinfav }) {

    const [loading, setLoading] = useState(false);
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
                    <NavLink className='cart-link' to='/favourites'>المفضلة</NavLink >
                </div>
                <div className="row prod-reset">
                    <div className="d-flex justify-content-center align-items-center
                                        prods col-lg-7 col-md-7 col-sm-12 col-12">
                        {loadingForFav &&
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
                        <div className={loadingForFav ? 'd-none' : 'd-block w-100'}>
                            {fav && fav.map(product => {
                                return (
                                    <ProductInfav
                                        key={product.id}
                                        removeprodinfav={removeprodinfav}
                                        product={product} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                {fav.length < 1 &&
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

export default Favourites;