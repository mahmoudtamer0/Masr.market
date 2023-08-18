import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Stars from "./Stars";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './proddet.css'
import { Link } from "react-router-dom";
function ProductDetails(props) {

    //stats
    // const [copied, setCopied] = useState(false)
    const [loading, setLoading] = useState(false);
    const [imgscounter, setImgscounter] = useState(0)
    const { productId } = useParams([]);
    const { addtoserver, cart } = props;
    const api_url = 'https://btngan-data.onrender.com/products';
    const [product, setProduct] = useState();
    //end states

    const [added, setAdded] = useState(false)

    useEffect(() => {
        const Find = cart.find(item => item.id == product?.id)
        Find ? setAdded(true) : setAdded(false)
    }, [cart])

    const handlecadd = (product) => {
        addtoserver(product)
        const Find = cart.find(item => item.id === product.id)
        if (Find) {
            setAdded(true);
        } else setAdded(true);
    }

    //Api's
    useEffect(() => {
        fetch(`${api_url}/${productId}`)
            .then(res => res.json()).then(data => setProduct(data))
    }, [])
    //end Api's

    //functions
    const handleCopied = () => {
        toast.success('Link Copied', {
            position: "bottom-left",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            rtl: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    useEffect(() => {
        setLoading(true)
    }, [])

    //end functions


    return (
        <div className="mainprod">
            <div className="container">

                {product ?
                    <div className="mainsection row justify-content-between">
                        <div className="images-div col-lg-6 d-flex">
                            <div className="det-imgs-col">
                                {product.images && product.images.map((img, index) => {
                                    return (
                                        <img
                                            className={imgscounter === index ? "active-col-img" : undefined}
                                            key={index}
                                            src={img.url}
                                            alt="..."
                                            onClick={() => setImgscounter(index)}
                                            id="cols_imgs"
                                        />
                                    )
                                })}
                            </div>
                            {product.images && <div className="main-img"><img alt="..." src={product.images[imgscounter].url} /></div>}
                        </div>

                        <div className="col-lg-6 prod-details">
                            <div><h3 className="prod-title">{product.title}</h3></div>
                            <div className="d-flex align-items-center count-details mt-3">
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-boxes-packing i-color "></i>
                                    <span>المتبقي <span className={product.remaining < 10 ? 'r-color' : 'i-color'}>{product.remaining}</span> وحدة</span>
                                </div>
                                <div className="d-flex align-items-center details-box">
                                    <i className="fa-solid fa-fire r-color"></i>
                                    <span>تم شرائه <span className="i-color">{product.buyed}</span> مرة</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center count-details mt-4 details-box">
                                <div className="d-flex align-items-center">
                                    <Stars stars={product.rate} /> <span className="shareAndrev">({product.count}) تقييم  </span>

                                </div>
                                <div className=" d-flex align-items-center details-fav c-pointer">
                                    <i className="fa-regular fa-heart"></i>
                                    <span className="shareAndrev">اضافة للمفضلة</span>
                                </div>
                                <CopyToClipboard text={window.location.href}
                                    onCopy={() => handleCopied()}   >
                                    <div className="btn-copied-link d-flex align-items-center details-box">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        <span className="shareAndrev">شارك المنتج</span>
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <div className="mt-4 prod-desc">
                                <h5>{product.description}</h5>
                            </div>
                            <div className="mt-5 prod-price-det">
                                <h3>{product.price} ج.م</h3>
                            </div>
                            <div className='d-flex det-actions-div mt-4'>
                                {!added
                                    ?
                                    <button onClick={() => handlecadd(product)} className='det-prod-add d-flex justify-content-center align-items-center'>
                                        <span><i className="fa-solid fa-cart-plus"></i></span>
                                        <span>اضف للسلة</span>
                                    </button>
                                    :
                                    <Link to="/cart" disabled={true} className='det-prod-add alredyadded d-flex justify-content-center align-items-center'>
                                        <span>تمت اضافاته</span>
                                        <span><i style={{ color: "#fff" }} className="fa-solid fa-check"></i></span>
                                    </Link>}
                                <button className='det-prod-add d-flex justify-content-center align-items-center'>
                                    <span><i className="fa-solid fa-cart-plus"></i></span>
                                    <span>شراء سريع</span>
                                </button>
                            </div>
                        </div>

                    </div>


                    : <div className="text-center"><ClipLoader
                        color='#62D0B6'
                        loading={loading}
                        size={80}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /><div className='mt-3'>.... Please wait a moment</div></div>}


            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={2}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div >
    )
}

export default ProductDetails;