import React from 'react';
import './Timeline.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import timelineData from './timelineData.json';
// import './OurStory.css'; 


const OurStory = () => {
  return (
    <>
      <h1 className="top d-flex align-items-center justify-content-center text-center text-white bg-black mb-md-0">Journey Timeline</h1>

    <div className="container our-story">
      
      <div className="timeline">
        {timelineData.map((entry, index) => (
          <div className={`row timeline-entry ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={index}>
            
            <div className={`col-md-6 ${index % 2 === 0 ? 'borderRight' : 'borderLeft' }`}>
              <div className="container-fluid py-md-5 timeline-content">
                  <p className='mb-2'>{entry.date}</p>
                  <h2>{entry.title}</h2>
                  <p className='fs-4'>{entry.description}</p>
                </div>
              </div>

            <div className={`col-md-6 ${index % 2 === 0 ? 'borderLeft' : 'borderRight' }`}>
              <div className="container-fluid py-md-5 pb-5 timeline-image">
                {entry.images.map((image, index) => (
                  <img src={image} className="img-fluid col-6 col-lg-4 p-1"  alt={entry.title} />
                ))  
                }
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default OurStory;