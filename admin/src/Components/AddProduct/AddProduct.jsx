import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {

  const[image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
      name:"",
      image:"",
      description:"",
      brand:"",
      category:"Electronics",
      buy_now_price:"",
      reserve_price:""
  });

  const Add_Product = async () => {
    console.log(productDetails);
    let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);
    
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

    if (dataObj.success) {
      product.image = dataObj.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {data.success?alert("Product Added"):alert("Failed")});
    }
  }

  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <input type="text" name="description" value={productDetails.description} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Product Brand</p>
        <input type="text" name="brand" value={productDetails.brand} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Buy Now Price</p>
          <input type="number" name="buy_now_price" value={productDetails.buy_now_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Reserve Price</p>
          <input type="number" name="reserve_price" value={productDetails.reserve_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
          <option value="Electronics">Electronics</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select> 
      </div>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <label for="file-input">
          <img className="addproduct-thumbnail-img" src={!image?upload_area:URL.createObjectURL(image)} alt="" />
        </label>
        <input onChange={(e)=>{imageHandler(e)}} type="file" name="image" id="file-input" hidden />
      </div>
      <button className="addproduct-btn" onClick={()=>{Add_Product()}}>ADD</button>
    </div>
  );
};

export default AddProduct;
