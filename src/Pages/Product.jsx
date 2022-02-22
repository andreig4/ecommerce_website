import React, { useEffect, useState } from "react";
import img from "../images/flowforgedproduct1.jpg";
import "./Product.css";
import { useNavigate, useParams } from "react-router-dom";
import { flowForged, forgedProducts, performanceProducts } from "../data";
import { Add, Remove } from "@mui/icons-material";
import Gallery from "../components/Gallery";

import { useDispatch } from "react-redux";
import { addCartItemsNumber } from "../features/cart/cartSlice";
import { addItemsToCart } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";

const Product = () => {
  const params = useParams();

  const [currentProduct, setCurrentProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [car, setCar] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    flowForged.forEach((item) => {
      if (item.id === params.productId) {
        setCurrentProduct(item);
      }
    });

    forgedProducts.forEach((item) => {
      if (item.id === params.productId) {
        setCurrentProduct(item);
      }
    });

    performanceProducts.forEach((item) => {
      if (item.id === params.productId) {
        setCurrentProduct(item);
      }
    });
  }, []);

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount((prevValue) => prevValue - 1);
    }
  };

  const increaseAmount = () => {
    setAmount((prevValue) => prevValue + 1);
  };

  const addToCart = (value) => {
    if (amount > 0 && car.trim().length !== 0) {
      let id = `${currentProduct.id}${car}`;

      dispatch(addCartItemsNumber(value));

      dispatch(
        addItemsToCart({
          ...currentProduct,
          amount,
          car,
          id,
        })
      );

      let existingEntries = JSON.parse(localStorage.getItem("Products"));

      const existingItem = existingEntries.find(
        (item) => item.id === id && item.car === car
      );

      if (existingItem) {
        existingItem.amount += amount;
      } else {
        existingEntries.push({
          ...currentProduct,
          amount,
          car,
          id: `${currentProduct.id}${car}`,
        });
      }

      localStorage.setItem("Products", JSON.stringify(existingEntries));
    }
  };

  return (
    <div className="single_product">
      {currentProduct.id ? (
        <div className="single_product_wrapper">
          <div className="image">
            <img src={currentProduct.img} alt="" />
          </div>
          <div className="info">
            <h1 className="title">{currentProduct.name}</h1>
            <select onChange={(e) => setCar(e.target.value)}>
              <option value="Car model" hidden>
                Car Model
              </option>
              {currentProduct.cars?.map((car) => (
                <option value={car} key={car}>
                  {car}
                </option>
              ))}
            </select>

            <h2 className="price">
              Price: <span>${currentProduct.price * amount} </span>
            </h2>

            <div className="single_product_quantity">
              <Remove className="remove_icon" onClick={decreaseAmount} />
              <span>{amount}</span>
              <Add className="add_icon" onClick={increaseAmount} />
            </div>

            <div className="single_product_buttons">
              <button onClick={() => addToCart(amount)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="single_product_wrapper">
          <h2 className="no_items">Item not found</h2>
        </div>
      )}

      <Gallery />
    </div>
  );
};

export default Product;
