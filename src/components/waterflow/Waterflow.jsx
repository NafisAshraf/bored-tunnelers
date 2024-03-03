import React, { useState } from 'react';

const Waterflow = () => {
  const [waterLevel, setWaterLevel] = useState(50); // Initial water level (0-100)

  const handleWaterLevelChange = (event) => {
    setWaterLevel(event.target.value);
  };

  // Increased container and circle size (adjust as needed)
  const circleRadius = 200;
  const containerHeight = 500;
  const borderWidth = 17; // Adjust border width as needed

  // Calculate mask position based on water level
  const maskY = containerHeight - (waterLevel / 100) * containerHeight;

  return (
    <div>
      <svg
        width={circleRadius * 2 + borderWidth * 2}
        height={containerHeight + borderWidth * 2}
      >
        {/* Permanent black border */}
        <circle
          cx={circleRadius + borderWidth}
          cy={containerHeight / 2 + borderWidth}
          r={circleRadius}
          fill="transparent"
          stroke="black"
          strokeWidth={borderWidth}
        />
        
        {/* Light blue water level */}
        <circle
          cx={circleRadius + borderWidth}
          cy={containerHeight / 2 + borderWidth}
          r={circleRadius}
          fill="lightblue"
          mask={`url(#waterMask-${waterLevel})`}
        />

        <defs>
          <mask id={`waterMask-${waterLevel}`}>
            <rect
              x={borderWidth}
              y={maskY} 
              width={circleRadius * 2}
              height={containerHeight - maskY}
              fill="white"
            />
          </mask>
        </defs>

        <text
          x={circleRadius + borderWidth}
          y={containerHeight / 2 + borderWidth + circleRadius / 3}
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={circleRadius / 3}
        >
          {waterLevel}%
        </text>
      </svg>
      <input
        type="range"
        min="0"
        max="100"
        value={waterLevel}
        onChange={handleWaterLevelChange}
      />
    </div>
  );
};

export default Waterflow;
