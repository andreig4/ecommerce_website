import React from "react";
import "./Performance.css";
import { performanceProducts } from "../data";
import PerformanceProduct from "../components/PerformanceProduct";

const Performance = () => {
  return (
    <div className="performance">
      <div className="performance_wrapper">
        <h1>Performance Wheels</h1>
        <div className="performance_items">
          {performanceProducts.map((item) => (
            <PerformanceProduct
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

export default Performance;
