/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react";

export default function CartPage(props) {
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
                      <img src={props.image} alt="" className="cart-image" />
                    </td>
                    <td>
                      <div className="product-title">{props.name}</div>
                      <div className="product-subtitle">{props.owner}</div>
                    </td>
                    <td>
                      <div className="product-title">Rp. {props.price}</div>
                      <div className="product-subtitle">Rupiah</div>
                    </td>
                    <td>
                      <a href="#" className="btn btn-remove-cart">
                        {" "}
                        Remove{" "}
                      </a>
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
                Rp. {props.price}
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
