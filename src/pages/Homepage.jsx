import React, { useEffect, useState } from "react";
// import "./homepage.css";
import ElementOne from "../components/HomePageElements/ElementOne/ElementOne";
import ElementTwo from "../components/HomePageElements/ElementTwo/ElementTwo";
import ElementThree from "../components/HomePageElements/ElementThree/ElementThree";
import TechnicalSpecifications from "../components/HomePageElements/TechnicalSpecifications/TechnicalSpecifications";

import { Link, useLocation } from "react-router-dom";
import { sanityFetch } from "../sanityClient";
import BackgroundTextSection from "../components/BackgroundTextSection";
import BackgroundVideoSection from "../components/BackgroundVideoSection";
import TextImageSection from "../components/TextImageSection";
import ImageSection from "../components/ImageSection";

import Page from "./Page";
import GoFundMeWidget from "../components/GoFundMe";

const Homepage = () => {
  // const [data, setData] = useState(null);
  // const [addGap, setAddGap] = useState(false);

  // useEffect(() => {
  //   sanityFetch(`*[_type == "pages" && title == "Homepage"]`).then((data) => {
  //     setData(data[0].items);

  //     // Set the addGap state based on whether there's a backgroundVideoSection
  //     if (
  //       data[0].items.some((item) => item._type === "backgroundVideoSection")
  //     ) {
  //       setAddGap(true);
  //     }
  //   });
  // }, []);
  const location = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300); // Wait for 1 second before scrolling

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Page pageTitle="Homepage" />
      {/* {data &&
          data.map((item, index) => {
            if (item._type === "backgroundVideoSection") {
              return (
                <BackgroundVideoSection
                  key={index}
                  title={item.title}
                  backgroundVideo={item.backgroundVideo}
                  text={item.text}
                  button={item.button}
                  buttonLink={item.buttonLink}
                />
              );
            }
            return null;
          })}
      </div>

      <div
        className={
          addGap
            ? "content bg-white z-1 pt-3"
            : "below-header bg-white z-1 pt-3"
        }
      >
        {data &&
          data.map((item, index) => {
            if (item._type === "backgroundTextSection") {
              return (
                <BackgroundTextSection
                  key={index}
                  title={item.title}
                  text={item.text}
                />
              );
            } else if (item._type === "textImageSection") {
              return (
                <TextImageSection
                  key={index}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  position={item.position}
                />
              );
            } else if (item._type === "imageSection") {
              return <ImageSection key={index} images={item.images} />;
            } else if (item._type === "horizontalLine") {
              return <hr className="my-5" />;
            } else if (item._type === "gap") {
              return <div className="my-3 py-3" />;
            } else {
              return null;
            }
          })} */}
      {/* <hr /> */}
      <div
        className="container-fluid flex-row border-top text-center bg-white py-5"
        id="gofundme-section"
      >
        {/* <hr className="pt-5 bg-white" /> */}
        {/* <h2 className="pb-4">Help Us Out!</h2> */}
        <GoFundMeWidget />
      </div>
    </>
  );
};

export default Homepage;
