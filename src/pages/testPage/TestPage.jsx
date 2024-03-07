import React from 'react'
import Waterflow from '../../components/waterflow/Waterflow'
import WebRTCStreamer from '../../components/WebRTCStreamer';
import WebRTCViewer from '../../components/WebRTCViewer';

const TestPage = () => {
    return (
        <React.Fragment>
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
            For Testing Components
        </h1>


        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
            <Waterflow/>
        </h1>

        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
        <div>
      {/* Streamer component */}
      <WebRTCStreamer />

      {/* Viewer component */}
      <WebRTCViewer />
    </div>
        </h1>
        
        </React.Fragment>
    )
}

export default TestPage
