import './productlist.css'
import { useState, useEffect, useRef } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Product from './Product';
import { Link } from 'react-router-dom';
function ProductList(props) {
    //states
    const localValue = JSON.parse(localStorage.getItem("products"))
    const [Products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { handeladdprod, cart } = props;
    const [loading, setLoading] = useState(false);
    const [filterd, setFilterd] = useState([])

    // Api's
    const api_url = 'https://btngan-data.onrender.com/products';
    const getProducts = () => {
        fetch(api_url).then((res) => res.json()).then((data) => setProducts(data))
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
        getProducts()
        getcategories();
    }, [])



    const handlesort = (id) => {
        let filterd = Products.filter(prod => prod.price >= 0)
        filterd.sort((a, b) => { return id === "high" ? b.price - a.price : a.price - b.price })
        if (filterd) {
            setProducts(filterd)
        }
    }

    // const handleformat = () => {
    //     let filterd = Products.filter(prod => prod.price >= 700)
    //     if (filterd) {
    //         setProducts(filterd)
    //     }
    // }

    //functions
    useEffect(() => {
        setLoading(true)
    }, [])

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(Products))
    }, [Products])
    //end functions
    return (
        <div className='product-list'>
            <div className="container">
                <div className='main-action-div d-flex justify-content-between'>
                    <div>
                        <h2>منتجاتنا</h2>
                        <p className='title-p'>تسوق احدث المنتجات المميزة المضافة جديد</p>
                    </div>
                    <div style={{ gap: "10px" }} className='d-flex align-items-center'>
                        <div className="btn-group dropend">
                            <button id='bttt'
                                type="button"
                                className="down-btn btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Sort by
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className='dropdown-item' >Default</button></li>
                                <li>
                                    <button id='high'
                                        onClick={(e) => handlesort(e.target.id)}
                                        className='dropdown-item'>
                                        Price: High to Low
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={(e) => handlesort(e.target.id)}
                                        className='dropdown-item'>
                                        Price: low to High
                                    </button>
                                </li>
                            </ul>
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
                </div>

                <div className="row justify-content-center align-items-center products-box">
                    {Products.length > 0 ? Products.map((product) => {
                        return (
                            <Product key={product.id} cart={cart} handeladdprod={handeladdprod} product={product} />
                        )
                    }
                    )
                        :
                        <div className='prodpre text-center'>
                            <ClipLoader
                                color='#62D0B6'
                                loading={loading}
                                size={30}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            /><div className='mt-3'>.... <i className="fa-regular fa-face-smile-beam" style={{ color: "#FFC62A" }}></i> Please wait a second waiting for server response </div></div>}
                </div>
                <div className='end-buttons w-50 d-flex justify-content-center'>
                    <Link>تواصل معنا</Link>
                    <Link>تعديل علي المنتجات</Link>
                </div>
            </div>
        </div>

    )
}

export default ProductList;