import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import { urlForFile } from "../sanityClient";

const BackgroundVideoSection = (props) => {
  // console.log(urlForFile(props.backgroundVideo));
  return (
    <>
      <div className="fullscreen-video">
        <video autoPlay muted loop className="background-video">
          <source src={urlForFile(props.backgroundVideo)} type="video/mp4" />
        </video>
      </div>
      <div className="above-video">
        <div className="above-video-text">
          <h1>{props.title}</h1>
          <p className="ps-1">{props.text}</p>
          <Link to={props.buttonLink}>
            <button className="btn btn-lg btn-primary mt-3">
              {props.button}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BackgroundVideoSection;
