// src/components/ImageDisplay.jsx
import React from "react";

const ImageDisplay = ({ src }) => {
  return (
    <div className="image-container">
      <img src={src} alt="Imagem Aleatória" className="image-display" />
    </div>
  );
};

export default ImageDisplay;
