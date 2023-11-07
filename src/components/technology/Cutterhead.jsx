import React from "react";
import "./technology.css";

const Cutterhead = () => {
  return (
    <div className="container-fluid bg-black py-4 dynamic-paddingx">
      <div className="container px-5">
        <div className="row mb-5">
          <div className="col-lg-8 d-flex flex-column align-items-center">
            <img
              className="pb-5 ps-3 image-heading"
              src="images/CutterheadHeading.png"
              alt="tunnel"
            />
            <p className="px-lg-3 text-white lh-base dynamic-text">
              The cutterhead of a micro tunnel boring machine (MTBM) serves as
              the primary excavation component, featuring cutting tools such as
              carbide disc cutters and roller cutters. This apparatus is
              designed with adaptability in mind, as the configuration and tool
              choice depend on the geological conditions at the tunneling site.
              Driven by hydraulic or electric motors, the cutterhead rotates,
              applying pressure and thrust to cut through abrasive materials
              like rock or soil. Advanced monitoring and control systems enable
              real-time adjustments, optimizing the cutting process. Maintenance
              and replacement of worn tools are essential to sustain cutting
              efficiency. The cutterhead is integral to successful tunneling
              projects, with its design tailored to specific project
              requirements and geological factors.
            </p>
          </div>
          <div className="text-white col-lg-4">
            <img
              className="pb-5 d-none d-lg-block"
              src="images/Cutterhead.png"
              alt="Cutterhead"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <hr className="text-white mb-5" />
        <div className="row py-5">
          <div className="text-white col-lg-6 d-flex flex-column align-items-center">
            <img
              className="pb-5 image-heading"
              src="images/MuckRemovalHeading.png"
              alt="Muck Removal Heading"
            />
            <p className="px-lg-3 lh-base dynamic-text">
              The muck removal system in a micro tunnel boring machine (MTBM) is
              a crucial component responsible for the efficient transport of
              excavated material, known as muck, from the tunnel face to the
              surface. This system typically comprises a slurry or screw
              conveyor, and it must be designed to handle the specific
              geotechnical characteristics of the muck encountered during
              tunneling. The muck removal process is often aided by pumps,
              augers, and settling tanks, which separate solids from the slurry
              for efficient disposal or reuse. Efficient muck removal is
              paramount in maintaining the tunneling process's productivity and
              preventing clogs and blockages. The design and configuration of
              the muck removal system must align with the geological conditions
              and project requirements to ensure seamless excavation and
              material transport.
            </p>
          </div>

          <div className="col-lg-6 ">
            <img
              className="pb-5 "
              src="images/MuckRemoval.png"
              alt="tunnel"
              style={{ width: "100%" }}
            />
            <h4 className="px-3 text-white lh-base dynamic-text">
              The muck removal process is often aided by pumps, augers, and
              settling tanks, which separate solids from the slurry for
              efficient disposal or reuse. Efficient muck removal is paramount
              in maintaining the tunneling process's productivity and preventing
              clogs and blockages. The design and configuration of the muck
              removal system must align with the geological conditions and
              project requirements to ensure seamless excavation and material
              transport.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cutterhead;
