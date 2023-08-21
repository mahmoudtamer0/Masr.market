import './footer.css'
import android from '../../images/android.svg'
import apple from '../../images/apple.svg'
import img from '../../images/image.png'
import img1 from '../../images/image (1).png'
import img2 from '../../images/image (2).png'
import img3 from '../../images/image (3).png'
import { useTranslation } from 'react-i18next'
function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <div className="footer">
            <div className='foot-firstlayer'>
                <div className="container">
                    <div className="first-foot-main row justify-content-between">
                        <div className="email-div col-lg-3 d-flex align-items-center">
                            <div>
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <div>
                                <h3>{t("footer.title1")}</h3>
                                <p>{t("footer.desc1")}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 inp-contact-div">
                            <h3>{t("footer.title2")}</h3>
                            <div className='d-flex align-items-center'>
                                <input type="text" placeholder={t("footer.desc2")} />
                                <button>{t("footer.btn_desc2")}</button>
                            </div>
                        </div>
                        <div className="col-lg-3 ios-div">
                            <h4>{t("footer.title3")}</h4>
                            <div className='d-flex'>
                                <img src={apple} />
                                <img src={android} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='foot-secondlayer'>
                <div className='container'>
                    <div className='row foot-sec-main justify-content-between align-items-center'>
                        <div className='secondlayer-firstdiv col-lg-2 col-md-4 col-sm-12 col-12'>
                            <h4>{t("footer.about_store")}</h4>
                            <p>{t("footer.about_desc")}</p>
                        </div>
                        <div className='secondlayer-secdiv col-lg-2 col-md-4 col-sm-12 col-12'>
                            <h4>{t("footer.col2_title")}</h4>

                            <ul>
                                <li><i className="fa-solid fa-angles-left"></i> <a>{t("footer.col2_link1")}</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>{t("footer.col2_link2")}</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>{t("footer.col2_link3")}</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>{t("footer.col2_link4")}</a> </li>
                            </ul>
                        </div>
                        <div className='secondlayer-thrdiv col-lg-2 col-md-4 col-sm-12 col-12'>
                            <h4>{t("footer.col3_title")}</h4>
                            <ul>
                                <li><i className="fa-solid fa-angles-left"></i> <a>{t("footer.col3_link1")}</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>{t("footer.col3_link2")}</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>{t("footer.col3_link3")}</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>{t("footer.col3_link4")}</a> </li>
                            </ul>
                        </div>

                        <div className='foot-sociallinks col-lg-2 col-md-4 col-sm-12 col-12'>
                            <h4>{t("footer.col4_title")}</h4>
                            <div>
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-snapchat"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='foot-lastlayer'>
                <div className='container'>
                    <div className='foot-last-main row justify-content-between align-items-center'>
                        <div className='col-lg-3 foot-last-fdiv'>
                            {t("footer.copy_right")}
                        </div>
                        <div className='foot-madby col-lg-3'>
                            <h4 style={{ color: "white", fontSize: "14px", margin: "0" }}>Made By:
                                <a href='https://www.linkedin.com/in/mahmoudtamer0' target='_blank'> Mahmoud Tamer </a></h4>
                        </div>
                        <div className='foot-last-secdiv col-lg-3 d-flex align-items-center'>
                            <h6>{t("footer.tax_number")}</h6>
                            <div className='d-flex'>
                                <img src={img} />
                                <img src={img1} />
                                <img src={img2} />
                                <img src={img3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;