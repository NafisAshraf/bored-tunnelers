import React from 'react';
import boringLogo from './boring-logo.png';
import pic1 from './Picture1.jpg';
import pic2 from './Picture2.jpg';
import pic3 from './Picture3.jpg';

const ElementOne = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-center">
            <img src={boringLogo} alt="Boring Logo" className="img-fluid mb-1" style={{ maxWidth: '450px' }} />
            <p style={{ fontSize: '30px' }}>
              The Not-A-Boring Competition is hosted every year since 2021 by
              Elon Musk's The Boring Company. It challenges participating teams
              from around the world to come up with tunneling solutions.
            </p>
            <img src={pic2} alt="Picture 2" className="img-fluid mb-3" style={{ maxWidth: '100%' }} />
          </div>
        </div>
        <div className="col-md-6 text-right">
          <div className="d-flex justify-content-start flex-column align-items-start"> {/* Align elements to the left */}
            <img src={pic1} alt="Picture 1" className="img-fluid mb-3" style={{ maxWidth: '100%' }} />
            <img src={pic3} alt="Picture 3" className="img-fluid" style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementOne;
