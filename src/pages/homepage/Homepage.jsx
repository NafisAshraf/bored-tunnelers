import React from "react";
import "./homepage.css";
import ElementOne from "../../components/HomePageElements/ElementOne/ElementOne";
import ElementTwo from "../../components/HomePageElements/ElementTwo/ElementTwo";
import ElementThree from "../../components/HomePageElements/ElementThree/ElementThree";
import TechnicalSpecifications from "../../components/HomePageElements/TechnicalSpecifications/TechnicalSpecifications";

const Homepage = () => {
  return (
    <>
      <ElementOne />
      <ElementThree />
      <ElementTwo />
      <TechnicalSpecifications />
    </>
  );
};

export default Homepage;
