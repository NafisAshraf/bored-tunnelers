import React from "react";
import "./homepage.css";
import ElementOne from "../../components/HomePageElements/ElementOne/ElementOne";
import ElementTwo from "../../components/HomePageElements/ElementTwo/ElementTwo";
import ElementThree from "../../components/HomePageElements/ElementThree/ElementThree";
import TechnicalSpecifications from "../../components/HomePageElements/TechnicalSpecifications/TechnicalSpecifications";
import videoSource from "./video.mp4";

const Homepage = () => {
  return (
    <>
      <div className="fullscreen-video">
        <video autoPlay muted loop className="background-video">
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
      <div className="above-video">
        <div className="above-video-text">
          <h1>Bored Tunnelers</h1>
          <p className="ps-1">
            First South Asian team to reach the finals of NOT-A-BORING
            competition
          </p>
          <button className="btn btn-lg btn-primary mt-3">Learn More</button>
        </div>
      </div>
      <div className="content bg-white z-1 pt-3">
        <ElementOne />
        <ElementThree />
        <ElementTwo />
        <TechnicalSpecifications />
      </div>
    </>
  );
};

export default Homepage;
