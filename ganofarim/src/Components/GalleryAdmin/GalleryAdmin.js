import React, { Component, useState } from "react";
import "./GalleryAdmin.css";
import { Redirect } from "react-router-dom";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const GalleryAdmin = (props) => {
  return (
    <div className="admin">
      <Carousel
        style={{
          height: 500,
          width: 800,
          marginLeft: 360,
          marginBottom: 100,
          top: "155px",
          backgroundColor: "orange",
        }}
      />
    </div>
  );
};

export default GalleryAdmin;
