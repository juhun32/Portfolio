import React from "react";

const Spotify = () => {
  const iframeStyle = {
    position: "fixed", // Fixed position keeps it pinned
    bottom: "16px", // Distance from the bottom
    right: "16px", // Distance from the right
    borderRadius: "12px", // Rounded corners
    zIndex: 1000, // Ensure it stays on top of other elements
  };

  return (
    <iframe
      style={iframeStyle}
      src="https://open.spotify.com/embed/track/31fMJwgrgNdk1IbWZEchX2?utm_source=generator"
      width="280" // Adjust width as needed
      height="80" // Adjust height as needed
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default Spotify;
