

import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

const WebRTCComponent = () => {
  const videoRef = useRef();
  const socket = io('http://localhost:8000'); // Update with your signaling server URL

  useEffect(() => {
    // Access the webcam using WebRTC
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        // Display the video stream in the component
        videoRef.current.srcObject = stream;

        // Initialize a SimplePeer instance
        const peer = new SimplePeer({
          initiator: true, // Initiator means this peer will initiate the connection
          trickle: false,   // Disable trickle ICE, as it simplifies the signaling process
          stream: stream,   // Pass the local stream to SimplePeer
        });

        // Send the offer to the signaling server
        peer.on('signal', (data) => {
          socket.emit('offer', data);
        });

        // Listen for an answer from the other peer
        socket.on('answer', (data) => {
          peer.signal(data);
        });
      })
      .catch((error) => console.error('Error accessing webcam:', error));
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default WebRTCComponent;
