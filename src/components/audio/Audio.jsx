import React from "react";

const Audio = ({ audioUrl }) => {
  return (
    <div className="audio-container ratio ratio-21x9">
      <iframe src={audioUrl} ></iframe>
    </div>
  );
};

export default Audio;
