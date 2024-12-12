import React from 'react';
import './GradientBackground.css';

const GradientBackground = () => {
  return (
    <div className="gradient-container">
      {/* SVG Filter */}
      <svg
        className="noise-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default GradientBackground;
