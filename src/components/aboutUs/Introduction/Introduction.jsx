import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="container-fluid bg-black py-4 dynamic-paddingx">
      <div className="container px-5">
        <div className="row py-5">
          <h1 className="dynamic-heading px-lg-3 pb-3">
            Our Vision and Objective
          </h1>
          <p className="dynamic-text text-white px-lg-3 pb-5 lh-base">
            The Bored Tunnellers team is dedicated to pioneering the future of
            sustainable urban infrastructure and transportation in Bangladesh.
            As the first Bangladeshi team to qualify for Elon Musk's
            Not-a-Boring Competition, we are committed to harnessing the power
            of innovative tunneling technologies to transform the way cities
            connect and function. Our vision is to create a world where cities
            breathe easier, with reduced surface congestion and maximized
            underground potential. We aim to foster a collaborative environment
            where engineers, innovators, and enthusiasts come together to design
            tunneling solutions that are efficient, eco-friendly, and
            revolutionary. Through our endeavors, Bored Tunnellers aspires to
            position Bangladesh as a global leader in subterranean
            infrastructure development.
          </p>
          <img
            src="images/introduction.png"
            alt="tunnel boring machines"
            style={{ width: "100%" }}
          />
        </div>

        <div className="row mb-lg-5">
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
              The Bored Tunnellers team is dedicated to pioneering the future of
              sustainable urban infrastructure and transportation in Bangladesh.
              As the first Bangladeshi team to qualify for Elon Musk's
              Not-a-Boring Competition, we are committed to harnessing the power
              of innovative tunneling technologies to transform the way cities
              connect and function. Our vision is to create a world where cities
              breathe easier, with reduced surface congestion and maximized
              underground potential. We aim to foster a collaborative
              environment where engineers, innovators, and enthusiasts come
              together to design tunneling solutions that are efficient,
              eco-friendly, and revolutionary. Through our endeavors, Bored
              Tunnellers aspires to position Bangladesh as a global leader in
              subterranean infrastructure development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
