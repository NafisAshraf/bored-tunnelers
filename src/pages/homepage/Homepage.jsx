import React from "react";
import { Link } from "react-router-dom";
import videoBg from "../../assets/vid3.mp4";
import "./homepage.css";
import ElementOne from "../../components/HomePageElements/ElementOne/ElementOne";
import ElementTwo from "../../components/HomePageElements/ElementTwo/ElementTwo";
import ElementThree from "../../components/HomePageElements/ElementThree/ElementThree";

const Homepage = () => {
  return (
    <>
      <ElementOne/>
      <ElementTwo/>
      <ElementThree/>
    </>
  );
};

export default Homepage;
