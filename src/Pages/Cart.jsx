import React from "react";
import "./Cart.css";
import CartProduct from "../components/CartProduct";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalCarValue,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCartValue = useSelector(selectTotalCarValue);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart_wrapper">
        <h1>Your Bag</h1>

        <div className="cart_buttons">
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout Now</button>
        </div>

        <div className="cart_main">
          <div className="cart_products">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartProduct
                  key={item.id}
                  id={item.id}
                  amount={item.amount}
                  car={item.car}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                />
              ))
            ) : (
              <h2 className="empty">Your cart is empty</h2>
            )}
          </div>

          <div className="cart_summary">
            <h1>Order Summary</h1>
            <p>
              Subtotal: <span>${totalCartValue}</span>
            </p>
            <p>
              Estimated shipping:{" "}
              {cartItems.length > 0 ? <span>$25</span> : <span>$0</span>}
            </p>
            <p>
              Total:{" "}
              <span>
                {cartItems.length > 0 ? (
                  <span>${totalCartValue + 25}</span>
                ) : (
                  <span>${totalCartValue}</span>
                )}
              </span>
            </p>
            <button className="checkout">Checkout now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
