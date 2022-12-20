import React, {useState} from "react";
import axios from "axios";

export default function ProductTambah() {
  const serverHost = "http://localhost:5001";
    const [file, setFile] = useState();
    const [name, setName]= useState("");
    const [price, setPrice]= useState();
    const [desc1, setDesc1]= useState("");
    const [desc2, setDesc2]= useState("");
    const [owner, setOwner]= useState("");
    const [products, setProducts] = useState([]);

    //untuk lokasi penyimpanan file path
    function handleFileSelected(event) {
      setFile(event.target.files[0]);
    }

    function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("desc1", desc1);
      formData.append("desc2", desc2);
      formData.append("owner", owner);
      axios.post(serverHost+"/details", formData).then((res)=> {
        setProducts(res.data);
      });
      console.log(setProducts);
      
    }



  return (
    <>
    <div
            className="section-content section-dashboard-home"
            data-aos="fade-up"
          >
            <div className="container-fluid">
              <div className="dashboard-heading">
                <h2 className="dashboard-title">Add New Product</h2>
                <p className="dashboard-subtitle">Create your own product</p>
              </div>
              <div className="dashboard-content">
                <form onSubmit={(event)=>{
                  handleSubmit(event);
                }}>
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="name">Product Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  aria-describedby="name"
                                  name="storeName"
                                  placeholder="Write Product Name"
                                  value={name}
                                  onChange={(event)=>{
                                    setName(event.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  aria-describedby="price"
                                  name="storePrice"
                                  placeholder="Write Price"
                                  value={price}
                                  onChange={(event)=>{
                                    setPrice(event.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="owner">Owner</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  aria-describedby="owner"
                                  name="storeOwner"
                                  placeholder="Write Owner"
                                  value={owner}
                                  onChange={(event)=>{
                                    setOwner(event.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="description">Description 1</label>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  aria-describedby="description"
                                  name="description_1"
                                  cols="30"
                                  rows="4"
                                  value={desc1}
                                  onChange={(event)=>{
                                    setDesc1(event.target.value);
                                  }}
                                //   className="form-control"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="description">Description 2</label>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  aria-describedby="description"
                                  name="description_2"
                                  cols="30"
                                  rows="4"
                                  value={desc2}
                                  onChange={(event)=>{
                                    setDesc2(event.target.value);
                                  }}
                                //   className="form-control"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="thumbnails">Thumbnails</label>
                                <input
                                  type={"file"}
                                  accept={".png"}
                                  onChange={(event) =>{
                                    handleFileSelected(event);
                                }}
                                  className="form-control pt-1"
                                  id="thumbnails"
                                  aria-describedby="thumbnails"
                                  name="thumbnails"
                                />
                                {/* <small className="text-muted">
                                  Kamu dapat memilih lebih dari satu file
                                </small> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <button
                          type="submit"
                          className="btn btn-success btn-block px-5"
                          value="Save Now"
                          ><a href="/">Save Now</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
  )
}
