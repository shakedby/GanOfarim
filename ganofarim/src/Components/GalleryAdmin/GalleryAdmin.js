import React, { Component, useState, useEffect } from "react";
import "./GalleryAdmin.css";
import { Redirect } from "react-router-dom";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import axios from "axios";
import OneImg from "./OneImg";

const GalleryAdmin = (props) => {
  const [galleryList, setGallerylist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallgal")
      .then((res) => {
        if (res.data.status === 404) {
          console.log("error");
        }
        setGallerylist(res.data.gallerylist);
      })
      .catch(() => {
        console.log("sucsees");
      });
  }, []);
  //   console.log(galleryList);

  return (
    <div className="admin">
      {galleryList.map((slide, indax) => {
        return (
          <OneImg
            url={slide.url}
            id={slide._id}
            setGallerylist={setGallerylist}
          />
        );
      })}
    </div>
  ); //inside slide i have url,id....
};
export default GalleryAdmin;
