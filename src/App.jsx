import { useState } from "react";
import "./App.css";

//Componentes
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Context
import { CartProvider } from "./context/CartContext";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import ShopPage from "./pages/Shop/ShopPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<ShopPage />} />
            <Route path="/shop/:category" element={<CategoryPage />} />
            <Route path="/shop/:category/:id" element={<ItemDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
