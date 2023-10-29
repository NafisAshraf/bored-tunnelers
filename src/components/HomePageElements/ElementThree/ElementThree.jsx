import React from 'react';
import pic from './Pciture1E3.png';
import './ElementThree.css'; // Import the CSS file

const ElementThree = () => {
  return (
    <>
      <div className="container my-5 gradient-border big" style={{ padding: '0px', paddingLeft: '20px' }}>
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
      </div>



    </>
  );
};

export default ElementThree;