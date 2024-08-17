import React from "react";
import { urlFor } from "../sanityClient";

const ImageSection = ({ images }) => {
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        {images.length === 1 ? (
          // If there's only one image, center it
          <div className="col-12 col-md-6">
            <div className="text-center">
              <img
                src={urlFor(images[0])}
                alt={images[0].alt}
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  aspectRatio: "3/2",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ) : (
          // For multiple images
          images.map((image, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 ${
                images.length % 2 !== 0 && index === images.length - 1
                  ? "mx-auto"
                  : ""
              }`}
            >
              <div
                className="mb-4"
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={urlFor(image)}
                  alt={image.alt}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    // ratio 3:2
                    aspectRatio: "3/2",
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageSection;
