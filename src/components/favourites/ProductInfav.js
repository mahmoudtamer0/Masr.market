import { Link } from "react-router-dom";


const ProducInfav = ({ product, removeprodinfav }) => {

    return (
        <div key={product.id} className='main-prod-INcart'>
            <div className="cartproduct align-items-center">
                <div className="cartimg">
                    <img src={product.image}></img>
                </div>
                <div className="boxcontent">
                    <div>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </div>
                </div>
                <div className="cart-prod-price">
                    {(product.price)} ج.م
                </div>
                <div className="basketdiv">
                    <i
                        onClick={() => { removeprodinfav(product) }}
                        className="fa-solid fa-xmark">
                    </i>
                </div>
            </div >
        </div>
    )
}

export default ProducInfav;