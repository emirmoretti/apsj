import React from "react";

const Audio = ({ audioUrl }) => {
  return (
    <div className="ratio ratio-21x9">
      <iframe src={audioUrl}></iframe>
    </div>
  );
};

export default Audio;