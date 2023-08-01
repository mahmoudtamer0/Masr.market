import landing1 from '../images/new-1.jpg'
import landing2 from '../images/new-2.jpg'
import landing3 from '../images/new-3.jpg'
import landing from '../images/landing4.jpg'
import './landing.css'

function Landing() {
    return (

        <div id="carouselExampleSlidesOnly" className="carousel slide landing" data-bs-ride="carousel">
            <div className='overlay'>
                <h1>Welcome ,</h1>
                <h1> To Masr Market App</h1>
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