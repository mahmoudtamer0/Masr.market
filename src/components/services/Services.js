import phoneImg from '../../images/phone.png'
import soundImg from '../../images/sound.png'
import { useTranslation } from "react-i18next";
import './Services.css'
function Services() {
    const { t, i18n } = useTranslation();
    return (
        <div className='services'>
            <div className="container">
                <div className="d-flex services-boxes align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div><i className="fa-solid fa-truck-fast"></i></div>
                        <div className="services-text">
                            <p>{t("services.title1")}</p>
                            <p>{t("services.desc")}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div><i className="fa-solid fa-truck-ramp-box"></i></div>
                        <div className="services-text">
                            <p>{t("services.title2")}</p>
                            <p>{t("services.desc")}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div><i className="fa-solid fa-wallet"></i></div>
                        <div className="services-text">
                            <p>{t("services.title3")}</p>
                            <p>{t("services.desc")}</p>
                        </div>
                    </div>
                </div>

                <div className='row align-items-center justify-content-between services-imges'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <img src={soundImg} alt='img' />
                    </div>
                    <div className='col-lg-6'>
                        <img src={phoneImg} alt='..' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services;