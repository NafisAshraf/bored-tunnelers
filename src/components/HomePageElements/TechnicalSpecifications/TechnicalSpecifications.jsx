import React from "react";

const TechnicalSpecifications = () => {
  return (
    <>
      <div className="container py-5 d-flex flex-column align-items-center">
        <img
          className="d-none d-md-block"
          src="images/technical-specifications.png"
          alt="technical specifications"
          style={{ width: "100%" }}
        />
        <img
          className="d-md-none"
          src="images/technical-specifications-mobile-view.png"
          alt="technical specifications"
          style={{ width: "100%" }}
        />
        <a href="/technology">
          <button className="btn btn-lg bg-dark text-white fw-bold px-4 py-2 mt-3 rounded-0">
            View Details
          </button>
        </a>
      </div>
    </>
  );
};

export default TechnicalSpecifications;
