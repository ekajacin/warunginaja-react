import React from "react";

import Gadget from "../assets/images/categories-gadgets.svg";
import Furni from "../assets/images/categories-furniture.svg";
import Mup from "../assets/images/categories-makeup.svg";
import Sneak from "../assets/images/categories-sneaker.svg";
import Tools from "../assets/images/categories-tools.svg";
import Baby from "../assets/images/categories-baby.svg";

export default function Categories() {
  return (
    <>
      <section className="store-trend-categories">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <h5>Categories</h5>
            </div>
          </div>
          <div className="row">
            <div
              className="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="component-categories d-block" href="/">
                <div className="categories-image">
                  <img
                    src={Gadget}
                    alt="Gadgets Categories"
                    className="w-100"
                  />
                </div>
                <p className="categories-text">Paket</p>
              </a>
            </div>
            <div
              className="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a className="component-categories d-block" href="/">
                <div className="categories-image">
                  <img
                    src={Furni}
                    alt="Furniture Categories"
                    className="w-100"
                  />
                </div>
                <p className="categories-text">Kebutuhan Rumah Tangga</p>
              </a>
            </div>
            <div
              className="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a className="component-categories d-block" href="/">
                <div className="categories-image">
                  <img src={Mup} alt="Makeup Categories" className="w-100" />
                </div>
                <p className="categories-text">Kebutuhan Wanita</p>
              </a>
            </div>
            <div
              className="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a className="component-categories d-block" href="/">
                <div className="categories-image">
                  <img src={Sneak} alt="Sneaker Categories" className="w-100" />
                </div>
                <p className="categories-text">Kebutuhan Pria</p>
              </a>
            </div>
            <div
              className="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a className="component-categories d-block" href="/">
                <div className="categories-image">
                  <img src={Tools} alt="Tools Categories" className="w-100" />
                </div>
                <p className="categories-text">Lampu</p>
              </a>
            </div>
            <div
              className="col-6 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a className="component-categories d-block" href="/">
                <div className="categories-image">
                  <img src={Baby} alt="Baby Categories" className="w-100" />
                </div>
                <p className="categories-text">Kebutuhan Bayi</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
