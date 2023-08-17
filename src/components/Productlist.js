import './productlist.css'
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Product from './Product';

function ProductList(props) {


    //states
    const [Products, setProducts] = useState();
    const [categories, setCategories] = useState([]);
    const { handeladdprod, cart } = props;
    const [loading, setLoading] = useState(false);

    // Api's
    const api_url = 'https://btngan-data.onrender.com/products';
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

    //functions
    useEffect(() => {
        setLoading(true)
    }, [])
    //end functions


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
                            <Product key={product.id} cart={cart} handeladdprod={handeladdprod} product={product} />
                        )
                    }
                    )
                        : <div className='prodpre text-center'>

                            <ClipLoader
                                color='#62D0B6'
                                loading={loading}
                                size={30}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            /><div className='mt-3'>....Please wait a second</div></div>}
                </div>
            </div>
        </div>

    )
}

export default ProductList;