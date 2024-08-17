import React from "react";
import { urlFor } from "../sanityClient";

const FeaturedItem = (props) => {
  return (
    <>
      <div className="py-3 h-100">
        <div className="card h-100" style={{ maxWidth: "30rem" }}>
          {props.logo && (
            <img
              src={urlFor(props.logo)}
              className="position-absolute"
              style={{ width: "35%" }}
              alt=""
            />
          )}
          {props.image && (
            <img
              src={urlFor(props.image)}
              className="card-img-top"
              style={{ objectFit: "cover", aspectRatio: "3/2" }}
              alt="Featured Item"
            />
          )}
          <div className="card-body d-flex flex-column justify-content-between">
            {/* date */}
            <div>
              {props.date && (
                <p className="card-text mb-2">
                  <small className="text-muted">{props.date}</small>
                </p>
              )}

              {props.title && (
                <h5 className="card-title mb-2">{props.title}</h5>
              )}
              {props.description && (
                <p className="card-text">
                  {props.description.slice(0, 150)} ...
                </p>
              )}
            </div>
            <div className="d-flex ">
              {props.link && (
                <a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark rounded-1 mt-4"
                >
                  Read More
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
