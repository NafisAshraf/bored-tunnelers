import React from 'react'
import Waterflow from '../../components/waterflow/Waterflow'
import LiveStream from '../../components/LiveStream/LiveStream'
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
        <LiveStream/>
        </h1>
        
        </React.Fragment>
    )
}

export default TestPage
