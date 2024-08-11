import React from "react";
import "../styles/global.css";
import { urlFor } from "../sanityClient";

const TextImageSection = ({ title, text, image, position }) => {
  const isLeft = position === "left";

  return (
    <div className="container">
      <div className="row">
        <div className={`col-md-6 col-12 ${isLeft ? "" : "order-md-2"}`}>
          <h1 className="dynamic-heading text-black">{title}</h1>
          <p className="dynamic-text text-black">{text}</p>
        </div>

        <div className="col-md-6 col-12">
          <img
            src={urlFor(image)}
            alt="image"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TextImageSection;
