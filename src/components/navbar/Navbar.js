import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './navbar.css'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Navbar(props) {

    const { t, i18n } = useTranslation();
    const { total } = props;
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const cart = useSelector(state => state.cart)
    const fav = useSelector(state => state.fav)

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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <div className="container justify-content-between">
                <div className="the-brand">
                    <Link className="navbar-brand d-flex" to="/">
                        <div>
                            <i className="fa-brands fa-opencart"></i>
                        </div>
                        <div className="logo-text">
                            <p>{t("header.logo")}</p>
                            <p>{t("header.logo2")}</p>
                        </div>
                    </Link>
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
                                    <span>{cart.length}</span>
                                    :
                                    <span className="cartlength-en">{cart.length}</span>
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
                                    <span className="favlemgth-en">{fav.length}</span>
                                    :
                                    <span className="favlemgth-en">{fav.length}</span>
                                }
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className="brand-text m-1">
                                <p>{t("header.fav_title1")}</p>
                                <p className="d-none">{t("header.fav_title1")}</p>
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
        </nav >
    )
}

export default Navbar;