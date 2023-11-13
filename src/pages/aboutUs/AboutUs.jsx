import React from "react";
import WhatWeCanDo from "../../components/aboutUs/WhatWeCanDo/WhatWeCanDo";
import Introduction from "../../components/aboutUs/Introduction/Introduction";
import "../../components/header.css";

const AboutUs = () => {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-text pt-5 px-3">
          <h1>About Us</h1>
          <p className="px-5 text-center">
            We are a dynamic team of tunneling enthusiasts who are passionate
            about pushing the boundaries of what's possible underground. With a
            shared dedication to innovation, expertise, and teamwork, we are
            committed to revolutionizing the tunneling industry and making a
            lasting impact.
          </p>
        </div>
      </div>
      <div className="below-header">
        <Introduction />
        <WhatWeCanDo />
      </div>
    </>
  );
};

export default AboutUs;
