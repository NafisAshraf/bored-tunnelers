import React from "react";
import "../styles/global.css";

const BackgroundTextSection = (props) => {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-text pt-5 px-3">
          <h1 className="text-center">{props.title}</h1>
          <p className="px-5 text-center">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default BackgroundTextSection;
