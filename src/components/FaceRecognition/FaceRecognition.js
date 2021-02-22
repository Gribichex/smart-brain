import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {box.map((boxElement, id) => {
          return (
            <div
              key={id}
              className="bounding-box"
              style={{
                top: boxElement.topRow,
                right: boxElement.rightCol,
                bottom: boxElement.bottomRow,
                left: boxElement.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
