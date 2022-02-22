import React from "react";
import { useNavigate } from "react-router-dom";
import "./PerformanceProduct.css";

const PerformanceProduct = ({ productName, img, cars, id }) => {
  const navigate = useNavigate();

  const navigateToProduct = (id) => {
    navigate(`/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="performance_product">
      <div className="img_container" onClick={() => navigateToProduct(id)}>
        <img src={img} alt="" />
      </div>
      <div className="performance_info">
        <p className="title">{productName}</p>
        <p className="cars">
          <span className="available">Available for: </span>
          {cars.map((car) => {
            if (cars.indexOf(car) !== cars.length - 1) {
              return <span key={car}>{car}, </span>;
            } else {
              return <span key={car}>{car}</span>;
            }
          })}
        </p>

        <div className="buttons">
          <button onClick={() => navigateToProduct(id)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceProduct;
