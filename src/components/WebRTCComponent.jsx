import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

const WebRTCComponent = () => {
  const videoRef = useRef();
  const socket = io('http://localhost:8000'); // Update with your server URL

  useEffect(() => {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
    });

    peer.on('signal', (data) => {
      socket.emit('offer', data);
    });

    socket.on('answer', (data) => {
      peer.signal(data);
    });

    socket.on('connect', () => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          peer.addStream(stream);
        })
        .catch((error) => console.error('Error accessing webcam:', error));
    });
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default WebRTCComponent;
