/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, } from "react-router-dom";

export default function CartPage() {
  const location = useLocation();
  const serverHost = "http://localhost:5001";
  const [products, setProducts] = useState([]);
  console.log(location);

  useEffect(() => {
    axios.get(serverHost + "/cart").then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  function hadleHapusClick(path) {
    const formData = new FormData();
    formData.append("path", path);
    axios.post(serverHost+"/product/delete", formData).then((res)=>{
      setProducts(res.data);
    });
  }
  return (
    <>
      <section
        className="store-breadcrumbs"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="store-cart">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-12 table-responsive">
              <table
                className="table table-borderless table-cart"
                aria-describedby="Cart"
              >
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name &amp; Seller</th>
                    <th scope="col">Price</th>
                    <th scope="col">Menu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={serverHost + location.state.path} alt="" className="cart-image" />
                    </td>
                    <td>
                      <div className="product-title">{location.state.name}</div>
                      <div className="product-subtitle">{location.state.owner}</div>
                    </td>
                    <td>
                      <div className="product-title">Rp. {location.state.price}</div>
                      <div className="product-subtitle">Rupiah</div>
                    </td>
                    <td>

                      <input
                      type={"button"}
                      value={"Remove"}
                      onClick={(event)=>{
                        hadleHapusClick(location.state.path);
                        console.log(location.state.id);
                      }}/>
                    
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="150">
            <div className="col-12">
              <hr />
            </div>
            <div className="col-12">
              <h2>Payment Informations</h2>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div className="col-4 col-md-2">
              <div className="product-title text-success">
                Rp. {location.state.price}
              </div>
              <div className="product-subtitle">Total</div>
            </div>
            <div className="col-12">
              <a
                href="/success"
                className="btn btn-success mt-4 px-4 btn-block"
              >
                Checkout Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
