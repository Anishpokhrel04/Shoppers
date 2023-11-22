import React from "react";
import './Offer.scss';
import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offers">
      <div className="left-offer">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLING PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="right-offer">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;
