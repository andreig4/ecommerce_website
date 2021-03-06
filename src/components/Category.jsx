import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ img, categoryName, id }) => {
  const navigate = useNavigate();

  const navigateTo = (location) => {
    navigate(`/${location}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="category" onClick={() => navigateTo(id)}>
      <div className="img_wrapper">
        <img src={img} alt="" />
      </div>

      <h2>{categoryName}</h2>
    </div>
  );
};

export default Category;
