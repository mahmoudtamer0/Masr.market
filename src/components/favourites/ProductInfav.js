import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletProductFav } from "../../rtk/reducers/fav-slice";


const ProducInfav = ({ product, setLoadingForFave, t }) => {

    const dispatch = useDispatch()

    const handleDeleteProduct = (product) => {
        setLoadingForFave(true)
        setTimeout(() => {
            dispatch(deletProductFav(product))
            setLoadingForFave(false)
        }, 200);
    }

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
                    {(product.price)} {t('favourites.curency')}
                </div>
                <div className="basketdiv">
                    <i
                        onClick={() => { handleDeleteProduct(product) }}
                        className="fa-solid fa-xmark">
                    </i>
                </div>
            </div >
        </div>
    )
}

export default ProducInfav;