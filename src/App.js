import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/shop/shop";
import Cart from "./Pages/cart/cart";
import Nav from "./Components/nav";
import { ShopContextProvider } from "./context/shopContext";
import Welcome from "./Components/Welcome";
import New from "./Pages/Footer";
import Footer from "./Pages/Footer";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Welcome/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
