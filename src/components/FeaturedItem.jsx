import React from "react";
import { urlFor } from "../sanityClient";

// import { Link } from "react-router-dom";

const FeaturedItem = (props) => {
  return (
    <>
      <div className="py-3">
        <div className="card" style={{ maxWidth: "30rem" }}>
          <img
            src={urlFor(props.logo)}
            className="position-absolute"
            style={{ width: "35%" }}
            alt=""
          />
          <img
            src={urlFor(props.image)}
            className="card-img-top"
            style={{ objectFit: "cover", aspectRatio: "3/2" }}
            alt="Featured Item"
          />
          <div className="card-body">
            {/* date */}
            <p className="card-text mb-2">
              <small className="text-muted">{props.date}</small>
            </p>

            <h5 className="card-title mb-2">{props.title}</h5>
            <p className="card-text">{props.description.slice(0, 150)} ...</p>
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-1"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
