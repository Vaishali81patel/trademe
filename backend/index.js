const port = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// mongodb+srv://vaishali81patel:<password>@cluster0.7jxxal5.mongodb.net/
// Database Connection With MongoDB
mongoose.connect("mongodb+srv://vaishali81patel:GraYash2023@cluster0.7jxxal5.mongodb.net/e-commerce");
// paste your mongoDB Connection string above with password
// password should not contain '@' special character

//Image Storage Engine 
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    console.log(file);
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
const upload = multer({storage: storage})
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
      success: 1,
        image_url: `http://localhost:5000/images/${req.file.filename}`
  })
})
app.use('/images', express.static('upload/images'));


// Schema for Creating Products

const Product = mongoose.model("Product", {
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    buy_now_price:{
        type:Number,
        required:true,
    },
    reserve_price:{
        type:Number,
        required:true,
    },
})

app.get("/", (req, res) => {
  res.send("Root");
});


//Create ab endpoint //
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products");
    res.send(products);
});


app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length>0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id+1;
  }
  else
  { id = 1; }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    brand: req.body.brand,
    category: req.body.category,
    buy_now_price: req.body.buy_now_price,
    reserve_price: req.body.reserve_price,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({success:true,name:req.body.name})
});

app.post("/removeproduct", async (req, res) => {
  const product = await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({success:true,name:req.body.name})
});


app.get("/", (req, res) => {
  res.send("Root");
});

// const port = process.env.PORT || 5000;
app.listen(port, (error) => {
  if (!error) console.log("Server Running on port" + port);
  else console.log("Error :", error);
});




