import './productlist.css'
import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { useRef } from 'react';
import Swal from "sweetalert2";
function ProductList(props) {

    const { addtoserver, cartErr } = props;
    const api_url = 'https://btngan-data.onrender.com/products';

    let navigate = useNavigate()

    const [Products, setProducts] = useState();
    const [categories, setCategories] = useState([]);
    const getProducts = () => {
        fetch(api_url).then((res) => res.json()).then((data) => { setProducts(data) })
    }
    const getcategories = () => {
        fetch("https://btngan-data.onrender.com/catigories")
            .then((res) => res.json())
            .then((data) => { setCategories(data) })
    }

    const getincategories = (catname) => {
        fetch(`https://btngan-data.onrender.com/${catname}`)
            .then((res) => res.json())
            .then((data) => { setProducts(data) })
    }

    useEffect(() => {
        getProducts();
        getcategories();
    }, [])

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
    }, [])

    let addref = useRef()

    return (
        <div className='product-list'>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2>منتجاتنا</h2>
                        <p className='title-p'>تسوق احدث المنتجات المميزة المضافة جديد</p>
                    </div>
                    <div className="btn-group dropend">
                        <button id='bttt' type="button" className="down-btn btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className='dropdown-item' onClick={() => getProducts()}>All</button></li>
                            {categories.map(cat => {
                                return (
                                    <li key={cat}><button className='dropdown-item' onClick={() => getincategories(cat)}>{cat}</button></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center products-box">
                    {Products ? Products.map((product) => {
                        return (
                            <div className="col-lg-3 col-12 col-md-4 col-sm-6" key={product.id}>
                                <div className="card card-product">
                                    <img src={product.image} loading='lazy' className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className='prod-category'>{product.category}</p>
                                        <Link className=" title-card" to={`/products/${product.id}`}>{product.title.slice(0, 50)}</Link>
                                        <p className="card-text">{product.description.slice(0, 60)}</p>
                                        <div className='d-flex align-items-center prod-price-details'>
                                            <h6 className='prod-price'>{product.price} ج م</h6>
                                            {product.discount_rate && <span className='prod-disc'>{product.discount_rate} ج م</span>}
                                        </div>
                                        <div className='d-flex actions-div'>
                                            {/* <Link className="btn btn-prod" to={`/products/${product.id}`}>Details</Link> */}
                                            <button onClick={() => addtoserver(product)} className='prod-add d-flex justify-content-center align-items-center'>
                                                <span><i class="fa-solid fa-cart-plus"></i></span>
                                                <span>اضف للسلة</span>
                                            </button>
                                            <button className='prod-fav'><i class="fa-regular fa-heart"></i></button>
                                        </div>
                                        <div className='prod-details-btn'>
                                            <Link to={`/products/${product.id}`} className='prod-add d-flex justify-content-center align-items-center'>
                                                تفاصيل المنتج
                                            </Link>
                                        </div>
                                        {cartErr === 500 && console.log('added')}
                                    </div>
                                </div >
                            </div>

                        )
                    }
                    )
                        : <div className='prodpre text-center'><ClipLoader
                            color='#62D0B6'
                            loading={loading}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /></div>}
                </div>
            </div>
        </div>

    )
}

export default ProductList;