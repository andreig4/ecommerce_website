import React from "react";
import "./CartProduct.css";
import { Add, Remove } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { decreaseCartProductAmount } from "../features/cart/cartSlice";
import { increaseCartProductAmount } from "../features/cart/cartSlice";
import { deleteItemFromCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ id, amount, car, img, name, price }) => {
  const dispatch = useDispatch();

  const decreaseAmountHandler = () => {
    dispatch(decreaseCartProductAmount({ id, amount, car }));
    let existingEntries = JSON.parse(localStorage.getItem("Products"));

    existingEntries.forEach((entry) => {
      if (entry.id === id && entry.car === car) {
        if (entry.amount > 1) {
          entry.amount--;
        } else {
          const itemIndex = existingEntries.findIndex(
            (entry) => entry.id === id
          );
          existingEntries.splice(itemIndex, 1);
        }
      }
    });

    localStorage.setItem("Products", JSON.stringify(existingEntries));
  };

  const increaseAmountHandler = () => {
    dispatch(increaseCartProductAmount({ id, amount, car }));

    let existingEntries = JSON.parse(localStorage.getItem("Products"));

    existingEntries.forEach((entry) => {
      if (entry.id === id && entry.car === car) {
        entry.amount++;
      }
    });

    localStorage.setItem("Products", JSON.stringify(existingEntries));
  };

  const deleteItemHandler = () => {
    dispatch(deleteItemFromCart({ id, amount, car }));

    let existingEntries = JSON.parse(localStorage.getItem("Products"));

    const itemIndex = existingEntries.findIndex((entry) => entry.id === id);
    existingEntries.splice(itemIndex, 1);
    localStorage.setItem("Products", JSON.stringify(existingEntries));
  };

  return (
    <div className="cart_product">
      <div className="cart_product_img_container">
        <img src={img} alt="" />
      </div>

      <div className="cart_product_info">
        <p className="details">
          Product Name: <span className="cart_value">{name}</span>
        </p>
        <p className="details">
          Car Model: <span className="cart_value">{car}</span>
        </p>
        <div className="quantity">
          <Remove
            className="cart_product_icon_substract"
            onClick={decreaseAmountHandler}
          />
          <span className="number">{amount}</span>
          <Add
            className="cart_product_icon_add"
            onClick={increaseAmountHandler}
          />
        </div>
        <p className="details">
          Price: <span className="cart_value">${price * amount}</span>
        </p>
        <ClearIcon
          className="cart_product_remove_icon"
          onClick={deleteItemHandler}
        />
      </div>
    </div>
  );
};

export default CartProduct;
