import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Stars from "./Stars";
import './proddet.css'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import ProductImages from "./ProductImages";
import { imageListClasses } from "@mui/material";
function ProductDetails(props) {
    const [imgscounter, setImgscounter] = useState(0)
    const { productId } = useParams([]);
    const api_url = 'https://btngan-data.onrender.com/products';
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`${api_url}/${productId}`)
            .then(res => res.json()).then(data => setProduct(data))
    }, [])
    let navigate = useNavigate()

    const { addtoserver } = props;

    // const addtoserver = () => {
    //     axios.post('https://btngan-data.onrender.com/cart', {
    //         id: product.id,
    //         title: product.title,
    //         price: product.price,
    //         image: product.image,
    //     }).then(() => { navigate('/cart') })
    // }

    // function addclass (index){
    //     if (index === imgscounter )

    // }

    const [isActive, setIsactive] = useState(0)

    function handleclick(index) {
        setImgscounter(index)
        // setIsactive(index)
    }

    //             <button className="cartbtn" onClick={() => addtoserver()}>Add to Cart</button>

    return (
        <div className="mainprod">
            <div className="container">
                <div className="mainsection row justify-content-between">
                    <div className="images-div col-lg-6 d-flex">
                        <div className="det-imgs-col">
                            {product.images ? product.images.map((img, index) => {
                                return (
                                    <img
                                        className={imgscounter === index ? "active-col-img" : ''}
                                        key={index}
                                        src={img.url}
                                        onClick={() => setImgscounter(index)}
                                        id="cols_imgs"
                                    />
                                )
                            }) : null}
                        </div>
                        {product.images ? <div className="main-img"><img src={product.images[imgscounter].url} /></div> : console.log('mo')}
                    </div>

                    <div className="col-lg-6 prod-details">
                        <div><h3 className="prod-title">{product.title}</h3></div>
                        <div className="d-flex align-items-center count-details mt-3">
                            <div className="d-flex align-items-center">
                                <i class="fa-solid fa-boxes-packing i-color"></i>
                                <span>المتبقي <span className="i-color">{product.remaining}</span> وحدة</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <i class="fa-solid fa-fire r-color"></i>
                                <span>تم شرائه <span className="i-color">{product.buyed}</span> مرة</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center count-details mt-4">
                            <div className="d-flex align-items-center">
                                <Stars stars={product.rate} /> <span>({product.count}) تقييم  </span>

                            </div>
                            <div className="d-flex align-items-center c-pointer">
                                <i class="fa-regular fa-heart"></i>
                                <span>اضافة للمفضلة</span>
                            </div>
                            <div className="d-flex align-items-center c-pointer">
                                <i class="fa-solid fa-share-nodes"></i>
                                <span>شارك المنتج</span>
                            </div>
                        </div>
                        <div className="mt-4 prod-desc">
                            <h5>{product.description}</h5>
                        </div>

                        <div className="mt-5 prod-price-det">
                            <h3>{product.price} ج.م</h3>
                        </div>
                        <div className='d-flex det-actions-div mt-4'>
                            {/* <Link className="btn btn-prod" to={`/products/${product.id}`}>Details</Link> */}
                            <button onClick={() => addtoserver(product)} className='det-prod-add d-flex justify-content-center align-items-center'>
                                <span><i className="fa-solid fa-cart-plus"></i></span>
                                <span>اضف للسلة</span>
                            </button>
                            <button className='det-prod-add d-flex justify-content-center align-items-center'>
                                <span><i className="fa-solid fa-cart-plus"></i></span>
                                <span>شراء سريع</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ProductDetails