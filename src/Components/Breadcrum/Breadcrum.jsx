import React from "react";
import "./Breadcrum.scss";
import arrrow_icon from "../Assets/arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrrow_icon} alt="" /> SHOP{" "}
      <img src={arrrow_icon} alt="" />
      {product.category} <img src={arrrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
