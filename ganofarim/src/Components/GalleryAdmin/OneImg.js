import React, { Component, useState } from "react";
import "./OneImg.css";
import { Redirect } from "react-router-dom";
const axios = require("axios");

const OneImg = (props) => {
  function deleteImg() {
    axios
      .get("http://localhost:5000/api/deletegal/" + props.id)
      .then((res) => {
        if (res.data.status === 404) {
          console.log("error");
        }
        props.setGallerylist(res.data.gallerylist);
      })
      .catch(() => {
        console.log("sucsees");
      });
  }

  return (
    <div className="one-img">
      <img src={props.url} alt="img" className="one-img"></img>
      <button onClick={deleteImg}>מחיקת תמונה </button>
    </div>
  ); //props.url- present OneIMg component and show one photo
};
export default OneImg;
