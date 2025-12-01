import './productlist.css'
import { useState, useEffect, useRef } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Product from './Product';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function ProductList() {
    //consts

    const [view, setView] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { t, i18n } = useTranslation();
    const [search, setSearch] = useState("")
    const [focused, setFocused] = useState(false)

    //functions
    const getincategories = async (catname) => {
        try {

            setLoading(true)

            const data = await fetch("https://btngan-data.onrender.com/products")
                .then(res => res.json());
            let filter = data.filter(product => product.category == catname)
            setView(filter)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }

    }

    // useEffect(() => {
    //     setView(Products)
    // }, [Products])

    const handlesort = (id) => {
        let filterd = view?.filter(prod => prod.price >= 0)

        filterd.sort((a, b) => { return id === "high" ? b.price - a.price : a.price - b.price })
        if (filterd) {
            setView(filterd)
        }
    }

    const handldefault = () => {
        let filterd = view?.filter(prod => prod.id >= 0)
        filterd.sort((a, b) => { return a.id - b.id })
        if (filterd) {
            setView(filterd)
        }
    }


    const getProductsRender = async () => {
        try {
            setLoading(true)
            const data = await fetch("https://btngan-data.onrender.com/products").then(data => data.json())
            setView(data);
            setLoading(false)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getProductsRender()
    }, [])





    return (
        <div className='product-list'>
            <div className="container">
                <div className='main-action-div d-flex align-items-center justify-content-between'>
                    <div>
                        <h2>{t("productsLists.title")}</h2>
                        <p className='title-p'>{t("productsLists.description")}</p>
                    </div>

                    <div style={{ gap: "10px" }} className='d-flex align-items-center'>
                        <div className="btn-group">
                            <button id='bttt'
                                type="button"
                                className="down-btn btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {t("sorting.sort_by")}
                            </button>
                            <ul className="dropdown-menu">
                                <li><button onClick={() => handldefault()} className='dropdown-item' >Default</button></li>
                                <li>
                                    <button id='high'
                                        onClick={(e) => handlesort(e.target.id)}
                                        className='dropdown-item'>
                                        {t("sorting.high")}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={(e) => handlesort(e.target.id)}
                                        className='dropdown-item'>
                                        {t("sorting.low")}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button id='bttt' type="button" className="down-btn btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                {t("sorting.categories")}
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className='dropdown-item' onClick={() => getProductsRender()}>All</button></li>
                                <li>
                                    <button
                                        className='dropdown-item'
                                        onClick={() => getincategories("لبس رجالي")}
                                    >
                                        {t("sorting.mens")}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className='dropdown-item'
                                        onClick={() => getincategories("لبس حريمي")}
                                    >
                                        {t("sorting.woman's")}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className='dropdown-item'
                                        onClick={() => getincategories("مجوهرات")}
                                    >
                                        {t("sorting.jewelry")}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className='dropdown-item'
                                        onClick={() => getincategories("إلكترونيات")}
                                    >
                                        {t("sorting.electronics")}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='search-main-div'>
                    <div className="nav-input-div mobil-search">
                        <div className='search-input-div'>
                            <input
                                onBlur={() => {
                                    setTimeout(() => {
                                        setFocused(false)
                                    }, 300);
                                }}
                                onFocus={() => setFocused(true)}
                                onChange={(e) => setSearch(e.target.value)}
                                type="search" placeholder={t("searching.place")} />
                        </div>
                        <div className={focused ? "search-result-box" : "d-none search-result-box"}>
                            {view.filter((item) => {
                                return search.toLowerCase() === "" ? null : item.title.toLowerCase().includes(search)
                            }).map((product) => {
                                return (
                                    <Link key={product.id} to={`/products/${product.id}`}>
                                        <p> {product.title}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                </div>

                <div className="row justify-content-center align-items-center products-box">
                    {loading != true ? view.map((product) => {
                        return (
                            <Product
                                key={product.id}

                                product={product}

                            />
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
                    <Link to="/contact-us">{t("productsLists.contact_us")}</Link>
                </div>
            </div>
        </div>

    )
}

export default ProductList;