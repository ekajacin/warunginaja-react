/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import Baner from "../assets/images/banner.jpg";

export default function Banner() {
  return (
    <>
      <section className="store-carousel">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="zoom-in">
              <div
                id="storeCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#storeCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#storeCarousel" data-slide-to="1"></li>
                  <li data-target="#storeCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={Baner}
                      className="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Baner}
                      className="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Baner}
                      className="d-block w-100"
                      alt="Carousel Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
