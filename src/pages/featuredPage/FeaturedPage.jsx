import React from "react";
import Featured from "../../components/Featured/Featured";
import "../../components/header.css";

function FeaturedPage() {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-text pt-5 px-3">
          <h1>Featured</h1>
          <p className="px-5 text-center">
            Team Bored Tunnellers has been featured in many local &
            international newspapers & media outlets
          </p>
        </div>
      </div>
      <div className="below-header">
        <Featured />
      </div>
    </>
  );
}

export default FeaturedPage;
