import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CylinderPage = () => {
  const mountRef = useRef(null);
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [zRotation, setZRotation] = useState(0);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cylinder geometry
    const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Cylinder color set to blue
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Update the cylinder's rotation based on state
      cylinder.rotation.x = xRotation;
      cylinder.rotation.y = yRotation;
      cylinder.rotation.z = zRotation;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to run when component unmounts
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [xRotation, yRotation, zRotation]); // React to changes in these states

  return (
    <div>
      <div ref={mountRef}></div>
      <div style={{ paddingTop: '20px' }}>
        <label>X Rotation: </label>
        <input type="range" min="0" max={2 * Math.PI} value={xRotation} onChange={(e) => setXRotation(parseFloat(e.target.value))} />
        <br />
        <label>Y Rotation: </label>
        <input type="range" min="0" max={2 * Math.PI} value={yRotation} onChange={(e) => setYRotation(parseFloat(e.target.value))} />
        <br />
        <label>Z Rotation: </label>
        <input type="range" min="0" max={2 * Math.PI} value={zRotation} onChange={(e) => setZRotation(parseFloat(e.target.value))} />
      </div>
    </div>
  );
};

export default CylinderPage;
