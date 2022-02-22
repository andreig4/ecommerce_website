import React from "react";
import "./GalleryItem.css";

const GalleryItem = ({ img, text }) => {
  return (
    <div className="gallery_item">
      <img src={img} alt="" />
      <p>{text}</p>
      <div className="hover"></div>
    </div>
  );
};

export default GalleryItem;
