import React, { useState } from 'react';
import '../styles/RickRoll.css'; // For styling (optional)

const RickRoll = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    // Trigger video to show and autoplay
    setShowVideo(true);
  };

  return (
    <div className="rickroll-container" onClick={handleClick}>
      <div className="rickroll-content">
        <h1 className="rickroll-title">Don't Click Me</h1>
        <p className="rickroll-description">You have been warned!</p>
        <button className="rickroll-button">Click at Your Own Risk</button>
        
        {showVideo && (
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Rick Roll"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default RickRoll;
