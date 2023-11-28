import React from "react";
import "./DescriptionBox.scss";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          cupiditate illum distinctio officia vel sapiente dolorum
          necessitatibus ex pariatur laborum temporibus fugit praesentium amet
          minus perferendis ullam iusto, reiciendis magni.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eaque ab
          amet facere magnam fugiat saepe tempora dignissimos. Perspiciatis,
          autem et reiciendis eius vitae in laudantium molestiae incidunt!
          Inventore, minima!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
