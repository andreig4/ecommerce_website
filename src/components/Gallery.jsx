import React from "react";
import { galleryImages } from "../data";
import "./Gallery.css";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Wheels gallery</h1>
      <div className="gallery_wrapper">
        {galleryImages.map((item) => (
          <GalleryItem img={item.img} text={item.text} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
