import { NavLink } from "react-router-dom";
import './navbar.css'
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Masr.Market</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link cart" to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://mahmoudtamer0.github.io/Masr.market_Management_System/">Edit_on_Products</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav >
    )
}

export default Navbar;