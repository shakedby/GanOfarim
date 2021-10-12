import React, { Component, useState } from "react";
import "./OneImg.css";
import { Redirect } from "react-router-dom";
const axios = require("axios");

const OneImg = (props) => {
  function deleteImg() {
    axios.get("http://localhost:5000/api/Gallerytest/:id");
  }

  return (
    <div className="one-img">
      <button onClick={deleteImg}>מחיקת תמונה </button>
    </div>
  );
};
export default OneImg;
