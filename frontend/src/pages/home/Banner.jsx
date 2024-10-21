import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/header.png"

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UP to 20% Discount on</h4>
        <h1>Girls Fashions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          doloribus saepe, blanditiis quibusdam dolorum, corporis dignissimos
          inventore provident quis repellendus perspiciatis cum rem obcaecati.
          Eos.
        </p>
        <button className="btn">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={banner} alt="banner img" />
      </div>
    </div>
  );
};

export default Banner;
