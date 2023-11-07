import React from "react";
import featuresData from "./features.json";
import "./technology.css";
import pic from "./Picture1Tech.png";

function TechnologyFeatures() {
  const { features, navigationSystem } = featuresData;
  return (
    // Cutterhead Features
    <div className="text-white">
      <div className="container py-3">
        <div className="row">
          <h1 className="text-center text-white  mb-0 pb-4 pt-5">
            Cutterhead Features
          </h1>
          <hr className="border  mx-auto mb-5" />

          <div className="col-6">
            <img
              src="images/tbm_vertical2.jpeg"
              alt="Cutter Head Image"
              className="img-fluid"
            />
          </div>
          <div className="col-6 text-white">
            {/* <h1 className="mb-3">Cutter Head Features</h1> */}
            {/* <hr className="w-75" /> */}
            <ul className="">
              {features.map((feature, index) => (
                <li className="py-3 fs-5" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="row align-items-center">
          <h1 className="text-center text-white  mb-0 pb-4 pt-5">
            Navigation System
          </h1>
          <hr className="border  mx-auto mb-5" />

          <div className="col-6 text-white">
            <ul className="">
              {navigationSystem.map((feature, index) => (
                <li className="py-3 fs-5" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <img
              src="images/tbm_horizontal.jpeg"
              alt="Cutter Head Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row align-items-center">
          <h1 className="text-center text-white  mb-0 pb-4 pt-5">
            Hydraulic System Components
          </h1>
          <hr className="border  mx-auto mb-5" />
          <div class="col-md-6">
            <img
              src="images/tbm_vertical2.jpeg"
              alt="Hydraulic System Image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <ul>
              <li className="py-3 fs-5 lh-lg">
                <strong>Proportional Pressure Lowering Valve:</strong> Enables
                precise and stepless adjustment of hydraulic pressure for smooth
                thrust control during tunneling operations.
              </li>
              <li className="py-3 fs-5 lh-lg">
                <strong>Pump:</strong> Supplies pressurized hydraulic fluid to
                power the system and propel the tunnel boring machine.
              </li>
              <li className="py-3 fs-5 lh-lg">
                <strong>Safe Valve:</strong> Maintains system safety by limiting
                pressure to prevent damage in case of malfunctions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row align-items-center">
          <h1 className="text-center text-white  mb-0 pb-4 pt-5">Features</h1>
          <hr className="border  mx-auto mb-5" />
          <div class="col-md-6 order-2 order-md-1">
            {" "}
            {/* Move this column to the right */}
            <ul>
              <li className="py-3 fs-5 lh-lg">
                <strong>500 mm diameter</strong>
              </li>

              <li className="py-3 fs-5 lh-lg">
                <strong>Closer tool spacing</strong>
              </li>

              <li className="py-3 fs-5 lh-lg">
                <strong>Safe Valve</strong>
              </li>

              <li className="py-3 fs-5 lh-lg">
                <strong>Direct measurement by Instrumentation</strong>
              </li>

              <li className="py-3 fs-5 lh-lg">
                <strong>Proportional Pressure Lowering Valve</strong>
              </li>

              <li className="py-3 fs-5 lh-lg">
                <strong>Computation-based vector observation</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-6 order-1 order-md-2">
            {" "}
            {/* Move this column to the left */}
            <img src={pic} alt="Hydraulic System Image" class="img-fluid " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyFeatures;
