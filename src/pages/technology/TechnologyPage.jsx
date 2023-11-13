import React from "react";
import "../../components/technology/technology.css";
import NavigationSystem from "../../components/technology/NavigationSystem";
import Cutterhead from "../../components/technology/Cutterhead";

function TechnologyPage() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-text pt-5 px-3">
          <h1>Technology</h1>
          <p className="px-5 text-center">
            At Bored Tunnelers, we believe in tunneling with a purpose. We aim
            to create innovative transportation solutions, develop underground
            habitats, and contribute to the advancement of infrastructure
            worldwide. Our projects are fueled by a relentless pursuit of
            groundbreaking ideas and a commitment to making a positive impact on
            the communities we serve.
          </p>
        </div>
      </div>
      <div className="bg-black below-header">
        <div className="container pt-4 border-top border-light">
          {/* <h1
            className="px-3 pb-lg-3 mt-5 text-center dynamic-heading"
            style={{
              color: "#FFA500",
            }}
          >
            A Portrait Of Creation
          </h1>
          <h1
            className="px-3 pb-3 text-center dynamic-heading"
            style={{
              color: "#FFF",
            }}
          >
            In Its Grand Detail
          </h1> */}

          {/* <hr className="border mx-auto" /> */}

          <img
            src="images/technology_labeled.png"
            class="img-fluid pb-5"
            alt="boring machine labeled"
          />
          {/* <div>
            <TechnologyFeatures />
          </div> */}
        </div>
      </div>
      <NavigationSystem />
      <Cutterhead />
    </>
  );
}

export default TechnologyPage;
