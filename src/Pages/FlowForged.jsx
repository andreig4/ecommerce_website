import React from "react";
import "./FlowForged.css";
import { flowForged } from "../data";
import FlowForgedProduct from "../components/FlowForgedProduct";

const FlowForged = () => {
  return (
    <div className="flowforged">
      <div className="flowforged_wrapper">
        <h1>FlowForged Wheels</h1>
        <div className="flowforged_items">
          {flowForged.map((item) => (
            <FlowForgedProduct
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

export default FlowForged;
