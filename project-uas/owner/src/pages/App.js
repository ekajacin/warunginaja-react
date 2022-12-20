import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

import "../assets/style/main.css";
import Detail from "./Detail";
import Cart from "./Cart";
import ProductTambah from "../components/ProductTambah"
import Success from "./Success";
// import TambahProduct from "../components/TambahProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/tambahProduct" element={<ProductTambah/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
