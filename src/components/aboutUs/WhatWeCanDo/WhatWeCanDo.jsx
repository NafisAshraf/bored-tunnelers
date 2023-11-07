import React from "react";
import "./WhatWeCanDo.css";

const WhatWeCanDo = () => {
  return (
    <div className="container-fluid bg-black pb-4 dynamic-paddingx">
      <div className="container px-5">
        <div className="row py-lg-5">
          <h1 className="dynamic-heading px-3 pb-3">What Can We Do</h1>
          <div className="text-white col-lg-7">
            <p className="dynamic-text px-lg-3 lh-base">
              At the heart of our engineering team's expertise lies the
              exceptional technical capabilities of our micro tunnel boring
              machines. We are dedicated to pushing the boundaries of precision
              engineering to develop MTBMs that excel in creating small-diameter
              tunnels with unparalleled accuracy and efficiency. our machines
              are designed to meet the rigorous demands of a wide range of
              applications. For geological research, our MTBMs can create
              boreholes to access underground rock layers, extract core samples,
              and provide in-depth data on Earth's crust.
            </p>
          </div>

          <div className="col-lg-5 d-flex align-items-center ">
            <img
              className="pb-5 "
              src="images/tunnel.png"
              alt="tunnel"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-5 d-flex align-items-start">
            <img
              className="pb-5 d-none d-lg-block"
              src="images/tunnel3.png"
              alt="tunnel"
              style={{ width: "100%" }}
            />
          </div>
          <div className="text-white col-lg-7">
            <p className="dynamic-text px-lg-3 lh-base">
              In environmental studies, they are instrumental for environmental
              monitoring and remediation, enabling access to underground
              contaminants, the installation of monitoring instruments, and the
              injection of remediation materials. Soil scientists and
              geotechnical engineers benefit from our MTBMs, which facilitate
              the collection of soil samples at various depths, supporting
              comprehensive soil analysis and testing. Moreover, for subsurface
              research in complex environments such as caves, underground water
              systems, or archaeological sites, our machines offer
              non-destructive access, minimizing disturbance to sensitive
              surroundings. Our dedication to innovation and research ensures
              that our MTBMs remain at the forefront of technological
              advancements, making them indispensable tools for diverse
              scientific and engineering pursuits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeCanDo;
