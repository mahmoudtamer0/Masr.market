import { NavLink } from "react-router-dom";
import './navbar.css'
function Navbar(props) {
    const { cartLength, total } = props;
    return (
        <nav className="navbar">
            <div className="container">
                <div className="the-brand">
                    <NavLink className="navbar-brand d-flex" to="/">
                        <div>
                            <i className="fa-brands fa-opencart"></i>
                        </div>
                        <div>
                            <p>متجر</p>
                            <p>سلة</p>
                        </div>
                    </NavLink>
                </div>
                <div className="nav-input-div">
                    <input type="text" placeholder="ابحث عما تريد" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="d-flex navlanks align-items-center">
                    <NavLink to={`/contact-us`} className=" navbar-brand align-items-center">
                        <div className="d-flex nav-cont">
                            <div>
                                <i className="fa-solid fa-message"></i>
                            </div>
                            <div className="brand-text text-prof">
                                <p>مرحبا بك</p>
                                <p>تواصل معنا</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className=" navbar-brand" to="/cart">
                        <div className="d-flex nav-cont cart-num-red">
                            <div className="d-flex position-r">
                                <span>{cartLength}</span>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="brand-text">
                                <p>سلة المشتريات</p>
                                <p>{total.toFixed(2)} ج.م</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div>
                </div>
            </div>
            <div className="nav-input-div mobil-search">
                <input type="text" placeholder="ابحث عما تريد" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </nav >
    )
}

export default Navbar;