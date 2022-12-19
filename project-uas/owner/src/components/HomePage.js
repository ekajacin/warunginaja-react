/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import axios from "axios";

import Banner from "../parts/Banner";
import Categories from "../parts/Categories";
import Product from "../parts/Product";

function HomePage() {
  const serverHost = "http://localhost:5001";
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();
  const [nama, setNama]= useState("");
  const [price, setPrice]= useState();
  const [desc1, setDesc1]= useState("");
  const [desc2, setDesc2]= useState("");
  const [owner, setOwner]= useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(serverHost + "/detail").then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  /*modal untuk menambahkan product*/
  let modalTambahProduct = "";
  if (isOpen) {
    modalTambahProduct =(
      <div className="modal">
        <div className="modal-inner">
        <div></div>
        <div>
        <form
              onSubmit={(event) => {
                handleSubmit(event);
                setIsOpen(!isOpen);
              }}
            >
          <p>Nama Produk</p>
          <input
          type={"text"}
          value={nama}
          onChange={(event)=>{
            setNama(event.target.value);
          }}/>
          <p>Harga Produk</p>
          <input
          type={"number"}
          value={price}
          onChange={(event)=>{
            setPrice(event.target.value);
          }}/>
          <p>Deskripsi</p>
              <textarea
                value={desc1}
                onChange={(event) => {
                  setDesc1(event.target.value);
                }}
              />
              <p>Deskripsi</p>
              <textarea
                value={desc2}
                onChange={(event) => {
                  setDesc2(event.target.value);
                }}
              />
            <p>Upload File:</p>
              <input
                className={"form-input-file"}
                type={"file"}
                accept={".png"}
                onChange={(event) => {
                  handleFileSelected(event);
                }}
              />
              <input
                style={{ marginTop: "10px" }}
                type={"submit"}
                value={"Simpan"}
              />
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                style={{ marginTop: "10px" }}
              >
                Tutup
              </button>
        </form>
        </div>
        </div>
      </div>
    );
  }

  /*membuat fungsi penyimpanan foto Produk*/
  function handleFileSelected(event) {
    setFile(event.target.files[0]);
  }

  /*membuat fungsi untuk menjalankan event submit dari form modal yang sudah dibuat*/
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("nama", nama);
    formData.append("price", price);
    formData.append("desc1", desc1);
    formData.append("desc2", desc2);
    formData.append("owner", owner);
    axios.post(serverHost+"/product", formData).then((res)=> {
      setProducts(res.data);
      setIsOpen(!isOpen);
    });
  }

  /*membuat action untuk button tambah product saat diklik*/
  function handleClickTambah() {
    setIsOpen(!isOpen);
  }
  // membuat action untuk button hapus dan menghubungkan pada perintah penghapusan data pada server
  function hadleHapusClick(path) {
    const formData = new FormData();
    axios.post(serverHost+"/pokemon/delete", formData).then((res)=>{
      setProducts(res.data);
    });
  }

  return (
    
      <div>
<div className="page-content page-home">
        <Banner />
        <Categories />
        <button
            onClick={() => {
              handleClickTambah();
            }}
            className="modal-close-btn"
          >
            Tambah Product
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
            onClick={(event)=>{
              hadleHapusClick(product.path);
              console.log(product.path);
            }}
            />
            </div>
          );
        })}
        
      </div>
      {modalTambahProduct}
      </div>
    
  );
}

export default HomePage;
