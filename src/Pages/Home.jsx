import React, { useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { heroSliders } from "../data";
import { categories } from "../data";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Category from "../components/Category";
import Gallery from "../components/Gallery";
import EmailSection from "../components/EmailSection";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index === 0 ? 1 : 0);
    } else {
      setIndex(index === 0 ? 1 : 0);
    }
  };

  return (
    <div className="home">
      <div className="hero_section">
        <div
          className="arrow_container left"
          onClick={() => handleClick("left")}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div
          className="arrow_container right"
          onClick={() => handleClick("right")}
        >
          <ArrowForwardIosIcon />
        </div>
        <div
          className="wrapper"
          style={{ transform: `translateX(${index * -100}%)` }}
        >
          {heroSliders.map((slider) => (
            <div className="slide" key={slider.id}>
              <img src={slider.img} alt="" />
              <div className="slide_info">
                <h1 className="title">{slider.title}</h1>

                <div className="text">
                  <Typewriter
                    options={{
                      strings: [`${slider.text}`],
                      autoStart: true,
                      loop: true,
                      pauseFor: 2500,
                      delay: 500,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="categories">
        <h1>Choose your style</h1>
        <div className="categories_wrapper">
          {categories.map((category) => (
            <Category
              key={category.id}
              img={category.img}
              categoryName={category.categoryName}
              id={category.id}
            />
          ))}
        </div>
      </div>
      <Gallery />
      <EmailSection />
    </div>
  );
};

export default Home;
