// WebRTCStreamer.js
import React, { useEffect, useRef } from 'react';
import SimplePeer from 'simple-peer';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const WebRTCStreamer = () => {
  const videoRef = useRef();

  useEffect(() => {
    const startStreaming = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        videoRef.current.srcObject = stream;

        const peer = new SimplePeer({ initiator: true, trickle: false });

        peer.addStream(stream);

        peer.on('signal', data => {
          // Send the signaling data to the signaling server
          socket.emit('streamer-signal', data);
        });
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    startStreaming();
  }, []);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default WebRTCStreamer;
