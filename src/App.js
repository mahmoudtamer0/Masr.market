import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductList from "./components/Productlist";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import PreLoader from "./components/Preloader";

function App() {
  return (
    <div className="App">

      <div className="main-page">
        <Router basename="/Masr.market">
          <Navbar />
          <PreLoader />
          <Routes>
            <Route path="/" element={<><Landing /> <ProductList /></>} />
            <Route path="/products/:productId" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
