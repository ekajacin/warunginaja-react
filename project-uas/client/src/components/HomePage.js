/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import axios from "axios";

import Banner from "../parts/Banner";
import Categories from "../parts/Categories";
import Product from "../parts/Product";

function HomePage() {
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
      <div className="page-content page-home">
        <Banner />
        <Categories />
        <section className="store-new-products">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <h5>Products</h5>
            </div>
          </div>
          {products.map((product) => {
            return (
               <Product
              id={product.id}
              name={product.name}
              price={product.price}
              image={serverHost + product.path}
              path={product.path}
            />
          );
        })}
      </div>
      </section>
      </div>
    </>
  );
}

export default HomePage;
