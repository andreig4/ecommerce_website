import React from "react";
import "./WishlistProduct.css";
import flowforgedproduct1 from "../images/flowforgedproduct1.jpg";
import ClearIcon from "@mui/icons-material/Clear";

const WishlistProduct = () => {
  return (
    <div className="wishlist_product">
      <div className="wishlist_product_img_container">
        <img src={flowforgedproduct1} alt="" />
      </div>

      <div className="wishlist_product_info">
        <p className="details">
          Product Name:{" "}
          <span className="wishlist_value">FlowForged ZP.1 Cave 22</span>
        </p>
        <p className="details">
          Car Model: <span className="wishlist_value">Audi</span>
        </p>
        <p className="details">
          Price: <span className="wishlist_value">$550</span>
        </p>
        <button className="add">Add to cart</button>
        <ClearIcon className="wishlist_product_remove_icon" />
      </div>
    </div>
  );
};

export default WishlistProduct;
