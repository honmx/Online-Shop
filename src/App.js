import React, { useEffect } from "react"
import './index.css';
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <CatalogPage /> } />
        <Route path="cart" element={ <CartPage /> } />
      </Route>
    </Routes>
  )
};

export default App;
