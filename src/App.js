import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductList from "./components/Productlist";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader"
import './components/preloader.css'
import Cart from "./components/Cart";
import Services from "./components/Services";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  //states
  const [loading, setLoading] = useState(false);
  const [loadingForCart, setLoadingForCart] = useState(false);
  const [products, setProducts] = useState([])
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

  useEffect(() => {
    getProductsInCart()
  }, [countPercart])

  //end functions

  //Api's
  const getProductsInCart = () => {
    fetch('https://btngan-data.onrender.com/cart')
      .then(res => res.json())
      .then(data => { setProducts(data) })
  }

  const removeprod = (prodId) => {
    setLoadingForCart(true)
    axios.delete(`https://btngan-data.onrender.com/cart/${prodId}`)
      .then(data => { getProductsInCart() }).then(() => setLoadingForCart(false))
  }

  async function addtoserver(product) {
    toast.success(`تم اضافته الي السلة`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    try {
      let res = await axios.post('https://btngan-data.onrender.com/cart', {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }).then(data => {
        getProductsInCart()
      })
      if (res.status === 200) {
        setCountPerCart((prev) => prev += 1);
      }
    } catch (err) {

    }
  }

  //end Api's

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
              <Route path="/" element={
                <>
                  <Landing />
                  <Services />
                  <ProductList
                    addtoserver={addtoserver} cartErr={cartErr} />
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
                    theme="colored"
                  />
                </>
              } />
              <Route path="/cart" element={<>
                <Cart
                  removeprod={removeprod}
                  products={products}
                  total={total}
                  deleviery={deleviery}
                  totalprods={totalprods}
                  tax={tax}
                  loadingForCart={loadingForCart}
                /></>} />
              <Route path="/products/:productId"
                element={<ProductDetails addtoserver={addtoserver}
                />} />
            </Routes>
            <Footer />
          </Router>
        </div>}

    </div >
  );
}

export default App;
