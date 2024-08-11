import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import "./MediaImages.css";

const MediaPage = () => {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context("./mediaImages", false, /\.(png|jpe?g|svg|webp)$/));

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
      <div className="page-header">
        <div className="container page-header-text pt-5 px-3">
          <h1>Media</h1>
          <p className="px-5 text-center">Explore our media gallery.</p>
        </div>
      </div>
      <div className="below-header bg-white" style={{ backgroundColor: "#202020" }}>

        <div className="   pt-4 border-top border-light" > </div>
      
        <div className="container mx-auto d-flex justify-content-center py-5">
          <h1 className="dynamic-heading px-lg-3 pb-3">
            Season 2023/24
          </h1>
        </div>

        
        <div className="container media-gallery ">

          {images.map((image, index) => (
            <div key={index} className="media-image-container">
              <img
                src={image}
                alt={`media-${index}`}
                className="media-image"
                onClick={() => openImageViewer(index)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              backgroundStyle={{
                backgroundColor: "rgba(1, 1, 1, 0.9)",
                zIndex: 1000, // Ensures the modal is above all other elements
              }}
              disableScroll={true}
            />
          )}
        </div>

      </div>
    </>
  );
};

export default MediaPage;
