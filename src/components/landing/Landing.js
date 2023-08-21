import landing from '../../images/e721f0c38c536761f4ac958122251944.png'
import './landing.css'
import { useTranslation } from "react-i18next";

function Landing() {
    const { t, i18n } = useTranslation();
    return (
        <div className='landing'>
            <div className='landing-img'><img src={landing} alt='...' /></div>
            <div className='text-center landing-text'>
                <h2>{t("landing.title")}</h2>
                <p>{t("landing.description")}</p>
                <button>{t("landing.land_button")}</button>
            </div>
        </div>
    )
}

export default Landing;