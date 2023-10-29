import React from 'react';
import pic1 from './Picture1E2.png';
import logo from './LOGOE2.png';
import './ElementTwo.css';

const ElementTwo = () => {
  return (
    <div className="container border border-dark my-5 " style={{ borderWidth: '20px', padding: '0px' }}>
      <div className="row">
        <div className="col-md-6">
          <img src={pic1} alt="Picture 1" className="img-fluid" style={{ height: '100%' }} />
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-start justify-content-center h-100">
            <img src={logo} alt="Logo" className="imgg special img-fluid mb-3" style={{ maxWidth: '300px', maxHeight: '100%', padding: '10px' }} />
            <p className="special" style={{ fontSize: '30px', textAlign: 'left' }}>The Boring Company’s goal is to build the tunnel infrastructure to enable fast, safe, and comfortable transportation tunnel.</p>
            <p className="special" style={{ fontSize: '30px', textAlign: 'left' }}>The Not-a-Boring Competition 2024 will challenge teams over 8 days and will be held in Bastrop, Texas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementTwo;
