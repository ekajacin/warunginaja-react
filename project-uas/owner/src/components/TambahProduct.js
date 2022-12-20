/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import axios from "axios";
import Product from "../parts/Product";

function TambahProduct() {
    const serverHost = "http://localhost:5001";
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

      //untuk lokasi penyimpanan file path
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
      });
    }
    return (
      <>
        <div className="modal">
          <div className="modal-inner">
          <div></div>
          <div>
          <form 
            onSubmit={(event) => {
                handleSubmit(event);
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
                <p>Nama Owner</p>
            <input
            type={"text"}
            value={owner}
            onChange={(event)=>{
              setOwner(event.target.value);
            }}/>
                <input
                  style={{ marginTop: "10px" }}
                  type={"submit"}
                  value={"Simpan"}
                />
          </form>
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
            </div>
          );
        })}
          </div>
          </div>
        </div>
      </>
    );
}

export default TambahProduct;

