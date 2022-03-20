import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import React from "react";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
