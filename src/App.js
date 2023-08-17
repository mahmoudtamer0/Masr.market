import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductList from "./components/Productlist";
import { Route, Routes, BrowserRouter as Router, json } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader"
import './components/preloader.css'
import Cart from "./components/Cart";
import Services from "./components/Services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];


function App() {
  //states
  const [loading, setLoading] = useState(false);
  const [loadingForCart, setLoadingForCart] = useState(false);
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [countPercart, setCountPerCart] = useState(0);
  const [cartErr, setCartErr] = useState(0)
  const [added, setAdded] = useState(true)

  //functions
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [])

  //end functions



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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])



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
            <Navbar cartLength={cart.length} total={total} />
            <Routes>
              <Route path="/" element={
                <>
                  <Landing />
                  <Services />
                  <ProductList
                    // addtoserver={addtoserver}
                    cart={cart}
                    cartErr={cartErr}
                    handeladdprod={handeladdprod} />
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
                element={<ProductDetails cart={cart} addtoserver={handeladdprod}
                />} />
            </Routes>
            <Footer />
          </Router>
        </div>}

    </div >
  );
}

export default App;
