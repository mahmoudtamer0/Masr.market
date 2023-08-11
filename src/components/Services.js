import phoneImg from '../images/phone.png'
import soundImg from '../images/sound.png'

import './Services.css'
function Services() {
    return (
        <div className='services'>
            <div className="container">
                <div className="d-flex services-boxes align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div><i className="fa-solid fa-truck-fast"></i></div>
                        <div className="services-text">
                            <p>منتجات مضمونه</p>
                            <p>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div><i className="fa-solid fa-truck-ramp-box"></i></div>
                        <div className="services-text">
                            <p>شحن مجاني</p>
                            <p>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div><i className="fa-solid fa-wallet"></i></div>
                        <div className="services-text">
                            <p>مدفوعات آمنة</p>
                            <p>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
                        </div>
                    </div>
                </div>

                <div className='row align-items-center justify-content-between services-imges'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <img src={soundImg} />
                    </div>
                    <div className='col-lg-6'>
                        <img src={phoneImg} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services;