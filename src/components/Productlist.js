import './productlist.css'
import { useState, useEffect } from 'react';
import Product from './Product';
function ProductList() {
    const api_url = 'https://fakestoreapi.com/products';

    const [Products, setProducts] = useState([])
    const [Categories, setCategories] = useState([])
    const getProducts = () => {
        fetch(api_url).then((res) => res.json()).then((data) => setProducts(data))
    }
    const getcategories = () => {
        fetch(`${api_url}/categories`).then((res) => res.json()).then((data) => setCategories(data))
    }
    const getincategories = (catname) => {
        fetch(`https://fakestoreapi.com/products/category/${catname}`).then((res) => res.json()).then((data) => setProducts(data))
    }

    useEffect(() => {
        getProducts()
        getcategories()
    }, [])


    return (
        <div className='product-list'>
            <h2 className="text-center">Our Products.</h2>
            <div className="container">
                <div>
                    <button onClick={() => getProducts()} className='btn btn-info m10'>All</button>
                    {
                        Categories.map(cat => {
                            return (
                                <button key={cat} onClick={() => getincategories(cat)} className='btn btn-info m10'>{cat}</button>
                            )
                        })
                    }
                </div>
                <div className="row justify-content-center align-items-center products-box">
                    {Products.map((product) => {
                        return (
                            <div className="col-lg-3 col-12 col-md-4 col-sm-6" key={product.id}>
                                <Product product={product} showButton={true} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default ProductList;