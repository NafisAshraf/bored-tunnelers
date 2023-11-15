import React from "react";
import "./ElementThree.css";

const ElementThree = () => {
  return (
    <>
      {/* <div className="container my-5 gradient-border big" style={{ padding: '0px', paddingLeft: '20px' }}>
        <div className="row">
          <div className="col-md-6 ">
            <h2 className="center-text" style={{ fontSize: '50px', paddingBottom: '30px' }}>The Bangladeshi Team</h2>
            <p className="center-text" style={{ fontSize: '30px' }}>
              Team Bored Tunnellers proposes a solution, Micro Tunnelling Boring Machine (MTBM), that aims to resolve issues like traffic congestion and water-logging.
              TBM technology has the potential to revolutionize the tunneling industry by enabling the construction of more efficient and less disruptive tunnels.
            </p>
          </div>
          <div className="col-md-6 disappear">
            <img className='img-fluid ' style={{ maxWidth: '100%', maxHeight: '500px', paddingLeft: '285px' }} src={pic} alt="Bored Tunnellers" />
          </div>
        </div>
      </div>


      <div className="container my-5 gradient-border center-text small" style={{ padding: '0px', textAlign: 'center' }}>
        <div className="column">
          <div className="col">
            <h2 className="center-text" style={{ fontSize: '50px', paddingBottom: '30px' }}>The Bangladeshi Team</h2>
            <p className="center-text" style={{ fontSize: '30px' }}>
              Team Bored Tunnellers proposes a solution, Micro Tunnelling Boring Machine (MTBM), that aims to resolve issues like traffic congestion and water-logging.
              TBM technology has the potential to revolutionize the tunneling industry by enabling the construction of more efficient and less disruptive tunnels.
            </p>
          </div>
        </div>
      </div> */}
      <hr />
      <div className="container pb-5 d-flex flex-column align-items-center parent">
        <div className="row">
          <div className="col-md-6">
            <img
              className="bd-pattern"
              src="images/bd-pattern.png"
              alt="pattern"
            />
            <img
              src="images/TeamBangladesh-lg.jpg"
              alt="team bangladesh"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1
              className="e3-dynamic-heading py-3 text-sm-start text-center"
              style={{ color: "#2e2e2e" }}
            >
              Team BORED TUNNELERS
            </h1>
            <p className="e3-dynamic-text text-sm-start text-center">
              Team BORED TUNNELERS is the only South Asian Team to be qualified
              for the Finals in Elon Musk's Not-A-Boring Competition. Their
              proposed solution Micro Tunnelling Boring Technology has the
              potential to win the Not-a-Boring Competition 2024.
            </p>

            <div className="pt-3">
              <a href="/about">
                <button className="btn btn-dark px-4 py-2 mx-2 ">
                  <div className="e3-dynamic-text"> About Us </div>
                </button>
              </a>

              <a href="/team">
                <button className="btn btn-secondary px-4 py-2 mx-2">
                  <div className="e3-dynamic-text"> Our Team </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ElementThree;
