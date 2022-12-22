const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mysql = require("mysql");
const fs = require("fs");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "warunginaja",
});

const app = express();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("server has been starting at port " + PORT);
});
app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage }).single("file");

//menampilkan product
app.get("/detail", (req, res) => {
  pool.query("SELECT * FROM product", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(result);
  });
});
app.get("/cart", (req, res) => {
  pool.query("SELECT * FROM product", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(result);
  });
});

//menambahkan data product
app.post("/details",(req, res)=>{
  upload(req,res, (err)=>{
    if(err instanceof multer.MulterError){
      return res.status(480).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    let value = [
      [
        req.body.name,
        req.body.price,
        req.body.desc1,
        req.body.desc2,
        req.body.owner,
        req.body.kategori,
        req.file.path.replace("public\\images\\","/images/" ),
      ],
    ];
    pool.query(
      "INSERT INTO product (name, price, desc1, desc2, owner,kategori_id, path) VALUES ?",
      [value],
      (err, result)=>{
        if (err) {
          return res.status(500).json(err);
        }
        pool.query("SELECT * FROM product", (err, result)=>{
          if (err) {
            return res.status(500).json(err);
          }
          return res.status(200).json(result);
        });
      }
    );
  });
});

// delete product
let imgPath="";
app.post("/product/delete", (req, res)=>{
 upload(req, res, (err)=> {
  pool.query(
    `DELETE FROM product WHERE path = '${req.body.path}'`, (err, result)=>{
      if (err) {
        return res.status(500).json(err);
      }
      pool.query("SELECT * FROM product", (err, result)=>{
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json(result);
      });
    }
  );
  imgPath = "./public"+ req.body.path;
  fs.unlinkSync(imgPath);
 });
});

app.get("/", (req, res) => {
  res.json({ message: "WELCOME" });
});
