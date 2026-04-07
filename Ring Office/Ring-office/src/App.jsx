import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";

import Services3cxPhoneSystems from "./pages/services-3cxPhoneSystems/Services3cxPhoneSystems";
import CloudPhoneSystems from "./pages/services/cloudPhoneSystems/CloudPhoneSystems";
import Shop3cxLicensing from "./pages/services-3cxPhoneSystems/shop-3cx Licensing/Shop3cxLicensing";

import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/shop/productDetails/ProductDetails";

import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="/3CX-Phone" element={<Services3cxPhoneSystems />} />

        <Route path="/cloud-hosting" element={<CloudPhoneSystems />} />

        <Route path="/3cx-licensing" element={<Shop3cxLicensing />} />

        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />

        <Route
          path="/product/:slug"
          element={<ProductDetails setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
