/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation, Link } from "react-router-dom";

import Testi1 from "../assets/images/icon-testimonial-1.png";
import Testi2 from "../assets/images/icon-testimonial-2.png";
import Testi3 from "../assets/images/icon-testimonial-3.png";

export default function DetailPage() {
  const location = useLocation();
  console.log(location);
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
                    Product Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="store-gallery" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-aos="zoom-in">
              <img
                src={location.state.image}
                className="w-100 main-image"
                alt=""
              />
            </div>
            <div data-aos="zoom-in">
              <Link to={`/cart`}>
                <a className="btn btn-success nav-link px-4 text-white btn-block mb-3">
                  Add to Cart
                </a>
              </Link>
            </div>
            <div className="store-details-container" data-aos="fade-up">
              <section className="store-heading">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mt-3 mb-3">
                      <h1>{location.state.name}</h1>
                      <div className="owner">{location.state.owner}</div>
                      <div className="price">Rp. {location.state.price} </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="store-description">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <p>{location.state.desc1}</p>
                      <p>{location.state.desc2}</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="store-review">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-8 mt-3 mb-3">
                      <h5>Customer Review (3)</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <ul className="list-unstyled">
                        <li className="media">
                          <img
                            src={Testi1}
                            className="mr-3 rounded-circle"
                            alt=""
                          />
                          <div className="media-body">
                            <h5 className="mt-2 mb-1">Hazza Risky</h5>I really
                            happy to decided buy this product last week now
                            feels like homey.
                          </div>
                        </li>
                        <li className="media my-4">
                          <img
                            src={Testi2}
                            className="mr-3 rounded-circle"
                            alt=""
                          />
                          <div className="media-body">
                            <h5 className="mt-2 mb-1">Anna Sukkirata</h5>I do
                            really satisfied with this.
                          </div>
                        </li>
                        <li className="media">
                          <img
                            src={Testi3}
                            className="mr-3 rounded-circle"
                            alt=""
                          />
                          <div className="media-body">
                            <h5 className="mt-2 mb-1">Shasya Shakira</h5>
                            When I saw at first, it was really awesome to have
                            with. Just let me know if there is another upcoming
                            product like this.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
