import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductList from "./components/Productlist";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { useEffect, useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader"
import './components/preloader.css'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [])
  return (
    <div className="App">
      {loading ?
        <div className="preloader">
          <HashLoader
            color='#ed8a8a'
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          /></div> : <div >
          <Router basename="/Masr.market">
            <Navbar />
            <Routes>
              <Route path="/" element={<><Landing /> <ProductList /></>} />
              <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
            <Footer />
          </Router>
        </div>}

    </div >
  );
}

export default App;
