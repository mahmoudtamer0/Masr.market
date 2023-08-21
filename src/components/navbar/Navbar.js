import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './navbar.css'
import { useEffect } from "react";
function Navbar(props) {

    const { t, i18n } = useTranslation();
    const { cartLength, total, fav } = props;

    const handlechange = (value) => {
        if (value === "ar") {
            i18n.changeLanguage("ar")
            document.body.classList.remove("ltr")
            localStorage.setItem("lang", JSON.stringify(i18n))
            localStorage.setItem("body", JSON.stringify(document.body.className))
        } else if (value === "en") {
            i18n.changeLanguage("en")
            document.body.classList.add("ltr")
            localStorage.setItem("lang", JSON.stringify(i18n))
            localStorage.setItem("body", JSON.stringify(document.body.className))
        }
    }

    useEffect(() => {
        document.body.className = JSON.parse(localStorage.getItem("body"))
    }, [])
    return (
        <nav className="navbar">
            <div className="container justify-content-between">
                <div className="the-brand">
                    <NavLink className="navbar-brand d-flex" to="/">
                        <div>
                            <i className="fa-brands fa-opencart"></i>
                        </div>
                        <div className="logo-text">
                            <p>{t("header.logo")}</p>
                            <p>{t("header.logo2")}</p>
                        </div>
                    </NavLink>
                </div>

                <div className="d-flex navlanks align-items-center">
                    <NavLink to={`/contact-us`} className=" navbar-brand align-items-center">
                        <div className="d-flex nav-cont">
                            <div>
                                <i className="fa-solid fa-message"></i>
                            </div>
                            <div className="brand-text text-prof">
                                <p>{t("header.contact_title1")}</p>
                                <p>{t("header.contact_title2")}</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className=" navbar-brand" to="/cart">
                        <div className="p-r d-flex nav-cont cart-num-red">
                            <div className="d-flex position-r">
                                {i18n.language === "ar" ?
                                    <span>{cartLength}</span>
                                    :
                                    <span className="cartlength-en">{cartLength}</span>
                                }
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="brand-text">
                                <p>{t("header.cart_title1")}</p>
                                <p>{total.toFixed(2)} {t("header.cart_title2")}</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className=" navbar-brand" to="/favourites">
                        <div className="p-r d-flex nav-cont cart-num-red">
                            <div style={{ position: "relative" }} className="d-flex">
                                {i18n.language === "ar" && fav.length > 0 ?
                                    <span>{fav.length}</span>
                                    :
                                    <span className="favlemgth-en">{fav.length}</span>
                                }
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div className="brand-text">
                                <p>{t("header.fav_title1")}</p>
                            </div>
                        </div>
                    </NavLink>
                    <div className="btn-group">
                        <button id='bttt'
                            type="button"
                            className="down-btn btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {i18n.language.toUpperCase()}
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button
                                    id="ar"
                                    onClick={(e) => handlechange(e.target.id)}
                                    className='dropdown-item'>
                                    AR
                                </button>
                            </li>
                            <li>
                                <button
                                    id="en"
                                    onClick={(e) => handlechange(e.target.id)}
                                    className='dropdown-item'>
                                    EN
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
            {/* <div className="nav-input-div mobil-search">
                <input type="text" placeholder="ابحث عما تريد" />
                {i18n.language === "en" ?
                    <i className="sech-icon fa-solid fa-magnifying-glass"></i>
                    :
                    <i className="def-icon fa-solid fa-magnifying-glass"></i>
                }
            </div> */}
        </nav >
    )
}

export default Navbar;