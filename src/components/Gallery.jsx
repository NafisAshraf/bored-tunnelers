import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { urlFor } from "../sanityClient"; // Importing urlFor

const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling on background
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
  };

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 p-4">
          {props.images.map((image, index) => (
            <div
              key={index}
              className="col"
              style={{ transition: "box-shadow 0.3s ease" }}
            >
              <div
                className="media-image-container h-100"
                style={{
                  overflow: "hidden",
                  borderRadius: "8px",
                  position: "relative",
                  width: "100%",
                  maxWidth: "100%",
                }}
                onClick={() => openImageViewer(index)}
              >
                <img
                  src={urlFor(image)}
                  alt={`media-${index}`}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {isViewerOpen && (
          <ImageViewer
            src={props.images.map((image) => urlFor(image))}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            backgroundStyle={{
              backgroundColor: "rgba(1, 1, 1, 0.9)",
              zIndex: 1000,
            }}
            disableScroll={true}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
