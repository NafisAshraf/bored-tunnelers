import React from "react";
import "./technology.css";

const NavigationSystem = () => {
  return (
    <div className="container-fluid bg-black py-4 dynamic-paddingx">
      <div className="container px-5">
        <hr className="text-white mb-5" />
        <div className="row py-lg-5">
          <div className="text-white col-lg-6">
            <img
              className="pb-5 image-heading"
              src="images/NavigationSystemHeading.png"
              alt="Navigation System Heading"
            />
            <p className="px-3 lh-base dynamic-text">
              The navigation system of a micro tunnel boring machine (MTBM) is a
              sophisticated arrangement of sensors and controls, primarily
              designed to ensure the precise alignment and trajectory of the
              machine within the tunneling project. It incorporates a
              combination of laser guidance, gyroscopes, and inclinometers to
              accurately determine the machine's position and orientation. Laser
              guidance systems provide real-time feedback on the MTBM's position
              in relation to a predefined tunnel path, enabling adjustments to
              maintain the desired course.
            </p>
          </div>

          <div className="col-lg-6 ">
            <img
              className="pb-5 "
              src="images/NavigationSystem.png"
              alt="tunnel"
              style={{ width: "100%" }}
            />
            <p className="px-3 text-white lh-base dynamic-text">
              Gyroscopes and inclinometers help monitor the machine's pitch and
              roll angles, ensuring that it remains on a stable and level
              trajectory. This navigation system plays a crucial role in
              avoiding deviations, reducing the risk of misalignment, and
              ensuring the MTBM's successful advancement through the underground
              environment.
            </p>
          </div>
        </div>

        <hr className="text-white mb-5" />

        <div className="row mb-5">
          <div className="col-lg-5 d-flex flex-column align-items-center">
            <img
              className="pb-5 image-heading "
              src="images/PropulsionHeading.png"
              alt="tunnel"
            />
            <img
              className="pb-5 "
              src="images/Propulsion.png"
              alt="tunnel"
              style={{ width: "100%" }}
            />
          </div>
          <div className="text-white col-lg-7">
            <p className="dynamic-text px-lg-3 lh-base">
              The propulsion system of a micro tunnel boring machine (MTBM) is a
              complex mechanism designed for the controlled advancement of the
              machine through the underground environment. It typically employs
              a combination of hydraulic motors, gear drives, and thrust jacks
              to provide the necessary thrust and rotation to the cutterhead.
              The hydraulic motors are responsible for the rotation of the
              cutterhead, allowing the cutting tools to bore through the
              geological material efficiently. Thrust jacks generate the axial
              force required to propel the MTBM forward, while the gear drives
              ensure the synchronized movement of the cutterhead and the entire
              machine. This propulsion system relies on precise control systems
              to adapt to changing geological conditions, optimizing the rate of
              excavation and ensuring the safe and efficient progression of the
              MTBM along the tunnel path.
            </p>
          </div>
        </div>

        <hr className="text-white" />
      </div>
    </div>
  );
};

export default NavigationSystem;
