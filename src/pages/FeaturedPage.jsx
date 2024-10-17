import React from "react";
// import Featured from "../components/Featured/Featured";
// import "../../components/header.css";
import Page from "./Page";

function FeaturedPage() {
  return (
    <>
      <div className="bg-white">
        <Page pageTitle="Featured In Page" />
        <div className="container mx-auto row text-center py-5 border-top ">
          <h1 style={{ fontWeight: "700" }} className="text-start pb-5">
            In the News
          </h1>
          <div className="col-1"></div>
          <div className="col-5">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/cMBo-1tORN4?si=OQRT9PSaDq7-oIMo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              style={{ maxWidth: "560px" }}
            ></iframe>
          </div>
          <div className="col-5">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/fua1WjC4HGc?si=R5Z1m_Y-7ziNJozP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              style={{ maxWidth: "560px" }}
            ></iframe>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default FeaturedPage;
