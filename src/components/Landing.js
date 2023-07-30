import landing1 from '../images/images (1).jpeg'
import landing2 from '../images/images (2).jpeg'
import landing3 from '../images/landing4.jpg'
import landing from '../images/images.jpeg'
import './landing.css'

function Landing() {
    return (

        <div id="carouselExampleSlidesOnly" className="carousel slide landing" data-bs-ride="carousel">
            <div className='overlay'>
                <h1>Welcome ,</h1>
                <h1> To Btngan Market App</h1>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={landing} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={landing2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={landing1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={landing3} className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Landing;