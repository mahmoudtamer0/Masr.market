import './productlist.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
function ProductList() {
    const api_url = 'https://btngan-data.onrender.com/products';

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

    return (
        <div className='product-list'>
            <h2 className="text-center">Our Products</h2>
            <div className="container">
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

                <div className="row justify-content-center align-items-center products-box">
                    {Products ? Products.map((product) => {
                        return (
                            <div className="col-lg-3 col-12 col-md-4 col-sm-6" key={product.id}>
                                <div className="card card-product">
                                    <img src={product.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <Link className="card-title title-card" to={`/products/${product.id}`}>{product.title.slice(0, 50)} ...</Link>
                                        <p className="card-text">{product.description.slice(0, 60)} ...</p>

                                        <h6>price : {product.price}$</h6>
                                        <Link className="btn btn-prod" to={`/products/${product.id}`}>Details</Link>
                                    </div>
                                </div >
                            </div>

                        )
                    }
                    )
                        : <div className='prodpre text-center'><ClipLoader
                            color='#ed8a8a'
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