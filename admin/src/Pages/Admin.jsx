import React from "react";
import "./CSS/Admin.css";
import ListProduct from "../Components/ListProduct/ListProduct";
import AddProduct from "../Components/AddProduct/AddProduct";
import { Route, Routes } from "react-router-dom";
//import ListProduct from "../Components/ListProduct/ListProduct";

const Admin = () => {

  return (
    <div className="admin">
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
