import React from "react";

const Audio = ({ audioUrl }) => {
  let string1 = audioUrl.split("d/")[1];
  /*/console.log(string1);*/
  let id = string1.split("/p")[0];
  //console.log(id);
  let urlAudio2 = `https://drive.google.com/uc?authuser=0&id=${id}&export=download
  `;
  let descargaLink = `https://drive.google.com/file/d/${id}/view`;
  
  return (
    <div className="audio-container d-flex align-items-center justify-content-between">
      {/*<iframe src={audioUrl} ></iframe>*/}
      <audio controls="controls">
        <source src={urlAudio2} />
      </audio>
      <a href={descargaLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary d-inline-block">
        Descargar audio
      </a>
    </div>
  );
};

export default Audio;
