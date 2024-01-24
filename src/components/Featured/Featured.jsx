import React from "react";
import pic1 from "./Picture1F.png";
import pic2 from "./Picture2F.png";
import pic3 from "./Picture3F.png";
import prothomalo_feature from "./prothomalo_feature.jpg"

const Featured = () => {
  return (
    <div
      className="container-fluid bg-black text-light py-5"
      style={{ padding: "40px" }}
    >
      <div className="row">
        <div className="col-12 p-0 d-flex justify-content-center align-items-center">
          <div className="position-relative">
            {/* <h1 className="text-center text-light">
              Team Bored Tunnellers has been featured in many local &
              international newspapers & media outlets
            </h1> */}
            <div className="container d-flex flex-wrap">
              <div className="row">

              <div className="col-12 col-md-6 p-2">
                <img
                  className="img-fluid"
                  src={pic1}
                  alt="Feature 1"
                  style={{ height: "100%", paddingLeft: "20px" }}
                />
              </div>
              <div className="col-12 col-md-6 p-2">
                <img
                  className="img-fluid"
                  src={pic2}
                  alt="Feature 2"
                  style={{
                    height: "100%",
                    width: "770px",
                    paddingLeft: "20px",
                  }}
                />
              </div>
              </div>

              <div className="row">

              <div className="col-12 col-md-6 p-2">
                <img
                  className="img-fluid"
                  src={pic3}
                  alt="Feature 3"
                  style={{
                    height: "100%",
                    width: "770px",
                    paddingLeft: "20px",
                  }}
                />
              </div>
              <div className="col-12 col-md-6 p-2">
                <img
                  className="img-fluid"
                  src={prothomalo_feature}
                  alt="Feature 4"
                  style={{
                    height: "100%",
                    width: "770px",
                    paddingLeft: "20px",
                  }}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
