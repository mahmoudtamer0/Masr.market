import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductList from "./components/Productlist";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { useEffect, useState, CSSProperties } from "react";
import Header from './components/Header'
import HashLoader from "react-spinners/HashLoader"
import './components/preloader.css'
import Cart from "./components/Cart";
import Services from "./components/Services";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [])

  // cart

  const [products, setProducts] = useState([])
  const [countPercart, setCountPerCart] = useState(0);
  const [cartErr, setCartErr] = useState(0)
  const [added, setAdded] = useState(true)

  useEffect(() => {
    getProductsInCart()
  }, [countPercart])



  const getProductsInCart = () => {
    fetch('https://btngan-data.onrender.com/cart')
      .then(res => res.json())
      .then(data => { setProducts(data) })
  }

  const removeprod = (prodId) => {
    axios.delete(`https://btngan-data.onrender.com/cart/${prodId}`)
      .then(data => { getProductsInCart() })
  }

  async function addtoserver(product) {
    try {
      let res = await axios.post('https://btngan-data.onrender.com/cart', {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }).then(data => { getProductsInCart() })
      if (res.status === 200) {
        setCountPerCart((prev) => prev += 1)
      }
    } catch (err) {

    }
  }

  let totalprods = 0;
  products.map(prod => { return (totalprods += prod.price) })
  let tax = Math.floor(totalprods * 0.14);
  let deleviery = 0
  { products.length >= 1 && (deleviery = 21) }

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
            {/* <Header /> */}
            <Navbar cartLength={products.length} total={total} />
            <Routes>
              <Route path="/" element={<><Landing /> <Services /> <ProductList addtoserver={addtoserver} cartErr={cartErr} /></>} />
              <Route path="/cart" element={<>
                <Cart
                  removeprod={removeprod}
                  products={products}
                  total={total}
                  deleviery={deleviery}
                  totalprods={totalprods}
                  tax={tax}
                /></>} />
              <Route path="/products/:productId" element={<ProductDetails addtoserver={addtoserver} />} />
            </Routes>
            <Footer />
          </Router>
        </div>}

    </div >
  );
}

export default App;
