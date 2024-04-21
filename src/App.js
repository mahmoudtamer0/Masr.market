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
import ScrollToTop from "./components/ScrollToTop";
import Contactus from "./components/contact us/Contactus";
import Favourites from "./components/favourites/Favourites";
import { useSelector } from "react-redux";
import axios from "axios";
function App() {
  //states
  const [loading, setLoading] = useState(false);
  const fav = useSelector(state => state.fav)
  const cart = useSelector(state => state.cart)
  const [Products, setProducts] = useState([]);

  //functions

  const api_url = 'https://btngan-data.onrender.com/products';

  const getProducts = () => {
    axios.get("data.json").then(data => setProducts(data.data.products))
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [])


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav))
  }, [fav])

  // the reset of cart

  let totalprods = cart?.reduce((price, prod) => price + prod.quantity * prod.price, 0)
  let tax = Math.floor(totalprods * 0.14);
  let deleviery = 0
  { cart.length >= 1 && (deleviery = 21) }

  let total = totalprods + tax + deleviery

  return (
    <div className="App">
      {loading ?
        // preloader
        <div className="preloader">
          <HashLoader
            color='#62D0B6'
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          /></div> :
        //the app
        <div>
          <Router basename="/Masr.market">
            <ScrollToTop />
            <Navbar fav={fav} total={total} />
            <Routes>
              <Route path="/" element={
                <>
                  <Landing />
                  <Services />
                  <ProductList getProducts={getProducts} Products={Products} />
                </>
              } />
              <Route path="/cart" element={<>
                <Cart
                  total={total}
                  deleviery={deleviery}
                  totalprods={totalprods}
                  tax={tax}
                /></>} />
              <Route path="/products/:productId"
                element={<ProductDetails Products={Products} />} />
              <Route path="/contact-us"
                element={<Contactus />} />
              <Route path="/favourites"
                element={
                  <Favourites />} />
            </Routes>
            <Footer />
          </Router>

        </div>}

    </div >
  );
}

export default App;
