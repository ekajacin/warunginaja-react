/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import axios from "axios";

import Banner from "../parts/Banner";
import Categories from "../parts/Categories";
import Product from "../parts/Product";

function HomePage() {
  const serverHost = "http://localhost:5001";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(serverHost + "/detail").then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  // membuat action untuk button hapus dan menghubungkan pada perintah penghapusan data pada server
  function hadleHapusClick(path) {
    const formData = new FormData();
    formData.append("path", path);
    axios.post(serverHost + "/product/delete", formData).then((res) => {
      setProducts(res.data);
    });
  }

  return (
    <div>
      <div className="page-content page-home">
        <Banner />
        <Categories />
        <button className="modal-close-btn">
          <a href="/tambahProduct"> Tambah Product</a>
        </button>

        {products.map((product) => {
          return (
            <div>
              <Product
                id={product.id}
                name={product.name}
                price={product.price}
                image={serverHost + product.path}
                path={product.path}
              />
              <input
                type={"button"}
                value={"Hapus"}
                onClick={(event) => {
                  hadleHapusClick(product.path);
                  console.log(product.path);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
