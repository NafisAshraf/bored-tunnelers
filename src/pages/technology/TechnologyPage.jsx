import React from "react";
import "../../components/technology/technology.css";
import NavigationSystem from "../../components/technology/NavigationSystem";
import Cutterhead from "../../components/technology/Cutterhead";

function TechnologyPage() {
  return (
    <>
      <div className="bg-black">
        <div className="container pt-4">
          <h1
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
          </h1>

          <hr className="border mx-auto" />

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
