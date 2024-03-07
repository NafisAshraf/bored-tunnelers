// WebRTCViewer.js
import React, { useEffect, useRef, useState } from 'react';
import SimplePeer from 'simple-peer';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const WebRTCViewer = () => {
  const videoRef = useRef();
  const [signalingData, setSignalingData] = useState(null);

  useEffect(() => {
    const startViewing = async () => {
      try {
        const peer = new SimplePeer({ trickle: false });

        // Listen for signaling data from the signaling server
        socket.on('streamer-signal', data => {
          // Simulate sending the received signaling data to the signaling server
          // In a real app, you would use a WebSocket to send this data to the server
          setSignalingData(data);
        });

        // When signaling data is available, signal the peer
        if (signalingData) {
          peer.signal(signalingData);
        }

        peer.on('stream', stream => {
          videoRef.current.srcObject = stream;
        });
      } catch (error) {
        console.error('Error setting up viewer:', error);
      }
    };

    startViewing();
  }, [signalingData]);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default WebRTCViewer;
