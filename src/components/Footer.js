import './footer.css'
import android from '../images/android.svg'
import apple from '../images/apple.svg'

import img from '../images/image.png'
import img1 from '../images/image (1).png'
import img2 from '../images/image (2).png'
import img3 from '../images/image (3).png'
function Footer() {
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
                                <h3>الاشتراك فى النشرة البريدية</h3>
                                <p>انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 inp-contact-div">
                            <h3>يمكنك إلغاء الاشتراك في أي لحظة</h3>
                            <div className='d-flex align-items-center'>
                                <input type="text" placeholder="ادخل البريد الالكتروني" />
                                <button>اشتراك</button>
                            </div>
                        </div>
                        <div className="col-lg-3 ios-div">
                            <h4>تطبيقات الجوال</h4>
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
                            <h4>عن متجرنا</h4>
                            <p>متجر سلة من افضل المتاجر التى تقوم ببيع المنتجات الرقمية بأفضل الاسعار وماركات عالمية تسوق الان واطلع على المزيد من التصاميم واستمتع بأفضل العروض والخصومات</p>
                        </div>
                        <div className='secondlayer-secdiv col-lg-2 col-md-4 col-sm-12 col-12'>
                            <h4>حسابي</h4>

                            <ul>
                                <li><i className="fa-solid fa-angles-left"></i> <a>حسابي</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>طلباطي</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>سلة المشتريات</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>المفضلة</a> </li>
                            </ul>
                        </div>
                        <div className='secondlayer-thrdiv col-lg-2 col-md-4 col-sm-12 col-12'>
                            <h4>روابط مهمة</h4>
                            <ul>
                                <li><i className="fa-solid fa-angles-left"></i> <a>من نحن</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>سياسة خصوصية</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>الشروط و الاحكام</a> </li>
                                <li><i className="fa-solid fa-angles-left"></i> <a>الدعم الفني</a> </li>
                            </ul>
                        </div>

                        <div className='foot-sociallinks col-lg-2 col-md-4 col-sm-12 col-12'>
                            <h4>تابعنا علي</h4>
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
                        <div className='col-lg-7 foot-last-fdiv'>
                            الحقوق محفوظة لمنصة سلة © 2023
                        </div>

                        <div className='foot-last-secdiv col-lg-5 d-flex align-items-center'>
                            <h6>الرقم الضريبي : 5343322</h6>
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