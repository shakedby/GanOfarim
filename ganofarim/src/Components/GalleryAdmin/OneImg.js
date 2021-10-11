import React, { Component, useState } from "react";
import "./OneImg.css";
import { Redirect } from "react-router-dom";
const axios = require("axios");

const OneImg = (props) => {
  function deleteImg() {
    axios.delete("http://localhost:5000/Gallerytest");
  }
  function addImg() {}

  return (
    <div className="one-img">
      <button onClick={deleteImg}>מחיקת תמונה </button>
      <button onClick={addImg}>הוספת תמונה </button>
    </div>
  );
};
export default OneImg;
