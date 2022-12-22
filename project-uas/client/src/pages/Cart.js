import React, { useEffect, useState } from "react";
import axios from "axios";

import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import CartPage from "../components/CartPage";

export default function Cart() {
  const serverHost = "http://localhost:5001";
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get(serverHost + "/detail").then((res) => {
      // console.log(res.data);
      setProduct(res.data);
    });
  }, []);
  return (
    <>
      <NavbarComponent />
      <div className="page-content page-details">
       
         
            <CartPage
              
            />
        
      </div>
      <Footer />
    </>
  );
}
