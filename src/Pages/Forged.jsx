import React from "react";
import "./Forged.css";
import { forgedProducts } from "../data";
import ForgedProduct from "../components/ForgedProduct";

const Forged = () => {
  return (
    <div className="forged">
      <div className="forged_wrapper">
        <h1>Forged Wheels</h1>
        <div className="forged_items">
          {forgedProducts.map((item) => (
            <ForgedProduct
              productName={item.name}
              img={item.img}
              key={item.id}
              cars={item.cars}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forged;
