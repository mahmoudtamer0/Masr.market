import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import ProductList from "./components/productsList/Productlist";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "./components/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader"
import './components/preloader.css'
import Cart from "./components/cart/Cart";
import Services from "./components/services/Services";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop";
import Contactus from "./components/contact us/Contactus";
import Favourites from "./components/favourites/Favourites";
// import global_en from './translation/en/global.json';
// import global_ar from './translation/ar/global.json';
// import i18next from "i18next";
// import { I18nextProvider } from 'react-i18next';

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const favFromLocalStorage = JSON.parse(localStorage.getItem("fav")) || [];
function App() {
  //states
  const [loading, setLoading] = useState(false);
  const [loadingForCart, setLoadingForCart] = useState(false);
  const [loadingForFav, setLoadingForFav] = useState(false);
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [fav, setFave] = useState(favFromLocalStorage)
  const [countPercart, setCountPerCart] = useState(0);
  const [cartErr, setCartErr] = useState(0)

  //functions
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [])


  const handeladdprod = (product) => {
    const productexist = cart.find((prod) => prod.id === product.id);
    if (productexist) {
      setCart(cart.map((prod) => prod.id === product.id ?
        { ...productexist, quantity: productexist.quantity + 1 } : prod))
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeprod = (product) => {
    setLoadingForCart(true)
    setTimeout(() => {
      setLoadingForCart(false)
      setCart(cart.filter(prod => prod.id !== product.id))
    }, 200);

  }

  const handledecprod = (product) => {

    const productexist = cart.find((prod) => prod.id === product.id)
    if (productexist?.quantity === 1) {
      return 0;
    } else {
      setCart(
        cart.map((prod) =>
          prod.id === product.id
            ? { ...productexist, quantity: productexist.quantity - 1 }
            : prod))
    }
  }

  const handeladdprodforfav = (product) => {
    const productexist = fav.find((prod) => prod.id === product.id);
    if (productexist) {
      setFave(fav.filter(prod => prod.id !== product.id))
    }
    else {
      setFave([...fav, { ...product, quantity: 1 }])
    }
  }

  const removeprodinfav = (product) => {
    setLoadingForFav(true)
    setTimeout(() => {
      setLoadingForFav(false)
      setFave(fav.filter(prod => prod.id !== product.id))
    }, 200);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav))
  }, [fav])

  let totalprods = cart?.reduce((price, prod) => price + prod.quantity * prod.price, 0)
  let tax = Math.floor(totalprods * 0.14);
  let deleviery = 0
  { cart.length >= 1 && (deleviery = 21) }

  let total = totalprods + tax + deleviery

  return (
    <div className="App">
      {loading ?
        <div className="preloader">
          <HashLoader
            color='#62D0B6'
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          /></div> : <div >

          <Router basename="/Masr.market">
            <ScrollToTop />
            <Navbar fav={fav} cartLength={cart.length} total={total} />
            <Routes>
              <Route path="/" element={
                <>
                  <Landing />
                  <Services />
                  <ProductList
                    cart={cart}
                    cartErr={cartErr}
                    handeladdprod={handeladdprod}
                    handeladdprodforfav={handeladdprodforfav}
                    fav={fav}
                    removeprodinfav={removeprodinfav}
                  />
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
                    theme="dark"
                  />
                </>
              } />
              <Route path="/cart" element={<>
                <Cart
                  removeprod={removeprod}
                  handledecprod={handledecprod}
                  handeladdprod={handeladdprod}
                  products={cart}
                  total={total}
                  deleviery={deleviery}
                  totalprods={totalprods}
                  tax={tax}
                  loadingForCart={loadingForCart}
                /></>} />
              <Route path="/products/:productId"
                element={
                  <ProductDetails
                    removeprodinfav={removeprodinfav}
                    fav={fav}
                    cart={cart}
                    addtoserver={handeladdprod}
                    handeladdprodforfav={handeladdprodforfav}
                  />} />
              <Route path="/contact-us"
                element={<Contactus />} />
              <Route path="/favourites"
                element={
                  <Favourites
                    removeprodinfav={removeprodinfav}
                    fav={fav}
                    loadingForFav={loadingForFav}
                  />} />
            </Routes>
            <Footer />
          </Router>

        </div>}

    </div >
  );
}

export default App;
