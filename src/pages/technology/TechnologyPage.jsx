import React from "react";
import TechnologyFeatures from "../../components/technology/TechnologyFeatures";

function TechnologyPage() {
  return (
    <div className="bg-black">
      <div className="container pt-4">
        <h1 className="text-center text-white mb-0 pb-4 pt-5">Technology</h1>
        <hr className="border mx-auto" />

        <img
          src="images/technology_labeled.png"
          class="img-fluid pb-5"
          alt="boring machine labeled"
        />
        <div>
          <TechnologyFeatures />
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
