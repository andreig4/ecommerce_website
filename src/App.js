import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import FlowForged from "./Pages/FlowForged";
import Forged from "./Pages/Forged";
import Performance from "./Pages/Performance";
import { Navigate, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "./features/cart/cartSlice";
import { addCartItemsNumber } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let existingEntries = JSON.parse(localStorage.getItem("Products"));

    if (existingEntries == null) {
      existingEntries = [];
      localStorage.setItem("Products", JSON.stringify(existingEntries));
    } else {
      existingEntries.forEach((entry) => {
        dispatch(addItemsToCart(entry));
        dispatch(addCartItemsNumber(entry.amount));
      });
    }
  }, []);

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="flowforged" element={<FlowForged />} />
        <Route path="forged" element={<Forged />} />
        <Route path="performance" element={<Performance />} />
        <Route path=":productId" element={<Product />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
