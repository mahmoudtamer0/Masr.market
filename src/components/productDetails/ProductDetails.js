import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Stars from "./Stars";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './proddet.css'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addprod } from "../../rtk/reducers/cart-slice";
import axios from "axios";
function ProductDetails() {

    //stats
    const [t, i18next] = useTranslation()
    const [loading, setLoading] = useState(false);
    const [imgscounter, setImgscounter] = useState(0)
    const { productId } = useParams([]);
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const [product, setProduct] = useState();
    const [added, setAdded] = useState(false)
    // //end states


    // // handle add product to cart and check
    useEffect(() => {
        const Find = cart.find(item => item.id == product?.id)
        Find ? setAdded(true) : setAdded(false)
    }, [])

    const handleAddProduct = (product) => {
        dispatch(addprod(product))
        const Find = cart.find(item => item.id === product.id)
        if (Find) {
            setAdded(true);
        } else setAdded(true);
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    //Api's

    const getProducte = () => {
        try {
            setLoading(true)
            setTimeout(() => {
                axios.get("../data.json").then(data => setProduct(data.data.products[productId - 1]))
            }, 1500)
        } catch { }
        setLoading(false)
    }

    useEffect(() => {
        getProducte()
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

    //end functions

    return (
        <div className="mainprod">
            <div className="container">

                {product ?
                    <div className="mainsection row justify-content-between">
                        <div className="images-div col-lg-6 d-flex">
                            <div className="det-imgs-col">
                                {product?.images && product?.images.map((img, index) => {
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
                                    <span>{t("product.remained")} <span className={product.remaining < 10 ? 'r-color' : 'i-color'}>{product.remaining}</span> {t("product.pieces")}</span>
                                </div>
                                <div className="d-flex align-items-center details-box">
                                    <i className="fa-solid fa-fire r-color"></i>
                                    <span>{t("product.buyed")} <span className="i-color">{product.buyed}</span> {t("product.time")}</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center count-details mt-4 details-box">
                                <div className="d-flex align-items-center">
                                    <Stars stars={product.rate} /> <span className="shareAndrev">({product.count}) {t("product.reviews")} </span>

                                </div>
                                <CopyToClipboard text={window.location.href}
                                    onCopy={() => handleCopied()}   >
                                    <div className="btn-copied-link d-flex align-items-center details-box">
                                        <i className="fa-solid fa-share-nodes"></i>
                                        <span className="shareAndrev">{t("product.share")}</span>
                                    </div>
                                </CopyToClipboard>
                            </div>
                            <div className="mt-4 prod-desc">
                                <h5>{product.description}</h5>
                            </div>
                            <div className="mt-5 prod-price-det">
                                <h3>{product.price} {t("product.price_curency")}</h3>
                            </div>
                            <div className='d-flex det-actions-div mt-4'>
                                {!added
                                    ?
                                    <button onClick={() => handleAddProduct(product)} className='det-prod-add d-flex justify-content-center align-items-center'>
                                        <span><i className="fa-solid fa-cart-plus"></i></span>
                                        <span>{t("product.add_to_cart")}</span>
                                    </button>
                                    :
                                    <Link to="/cart" disabled={true} className='det-prod-add alredyadded d-flex justify-content-center align-items-center'>
                                        <span>{t("productsLists.added_btn")}</span>
                                        <span><i style={{ color: "#fff" }} className="fa-solid fa-check"></i></span>
                                    </Link>}
                                <button className='det-prod-add d-flex justify-content-center align-items-center'>
                                    <span><i className="fa-solid fa-cart-plus"></i></span>
                                    <span>{t("product.Buy")}</span>
                                </button>
                            </div>
                        </div>

                    </div>


                    : <div className="text-center">
                        <HashLoader
                            className="m-auto"
                            color='#62D0B6'
                            loading={true}
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