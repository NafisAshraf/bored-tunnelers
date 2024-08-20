import React, { useEffect } from "react";
import { sanityFetch, urlFor } from "../sanityClient";
import "../styles/global.css";

const TimelineSection = (props) => {
  const data = props.items;
  console.log(data);
  return (
    <>
      <div className="container our-story">
        <div className="timeline">
          {data.map((entry, index) => (
            <div
              className={`row timeline-entry ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
              key={index}
            >
              <div
                className={`col-md-6 ${
                  index % 2 === 0 ? "borderRight" : "borderLeft"
                }`}
              >
                <div className="container-fluid py-md-5 timeline-content">
                  <p className="mb-2">{entry.date || "No Date"}</p>
                  <h2>{entry.title || ""}</h2>
                  <p className="fs-4">{entry.text || "No Text"}</p>
                </div>
              </div>

              <div
                className={`col-md-6 ${
                  index % 2 === 0 ? "borderLeft" : "borderRight"
                }`}
              >
                <div className="container-fluid py-md-5 pb-5 timeline-image">
                  {entry.images &&
                    entry.images.map((image, index) => (
                      <img
                        src={urlFor(image)}
                        className="img-fluid col-6 col-lg-6 p-1"
                        alt={entry.title || "No Title"}
                        key={index}
                      />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelineSection;
