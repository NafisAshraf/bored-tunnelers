import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

const TeamLoading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 75) {
                setProgress(prevProgress => prevProgress + 10);
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: '0 auto', backgroundColor: 'black' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
                <h1>Final team to be announced</h1>
                <ProgressBar now={progress} animated variant="danger" style={{ width: '100%', marginTop: '20px' }} />
            </div>
        </div>
    );
}

export default TeamLoading;
