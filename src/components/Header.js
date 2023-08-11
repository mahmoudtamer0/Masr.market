import { Container } from "@mui/material";
import './Header.css'
export default function Header() {


    return (
        <div className="Header">
            <div className="container">
                <nav className="navbar d-flex justify-content-between align-item-center">
                    <div className="d-flex navcont">
                        <div><span><i className="fa-solid fa-phone-flip"></i></span><span>01123511914</span></div>
                        <div><span><i className="fa-regular fa-envelope"></i></span><span>Support@sala.sa</span></div>
                    </div>
                    <div className="navlinks">
                        <ul className="d-flex g-10 ul-header">
                            <li><a>مصر - جنيه</a></li>
                            <li><a>المفضلة</a></li>
                            <li><a>سياسة الاستبدال و الاسترجاع</a></li>
                            <li><a>تواصل معنا</a></li>
                            <li><a>مصر - جنيه</a></li>
                        </ul>
                    </div>
                </nav>
            </div >
        </div >
    )
}