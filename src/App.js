import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductList from "./components/Productlist";
import About from "./components/About";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Landing /> <ProductList /></>} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
