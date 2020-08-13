import React, { useState, useEffect } from "react";
import ImageSpotLight from "../image/ImageSpotLight";
import ImageManager from "../../modules/ImageManager";


const ImageRandomizer = (props) => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightImage = () => {
    ImageManager.getRandomImageId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightImage();
  }, [props.imageId]);

  return (
    <>
      <div className="randomizer-h3-container">
        <h3 className="randomizer-h3">Today's Suggested Image</h3>
      </div>
      <button id="refresh-button" onClick={refreshSpotlightImage}>Reload &#x27f3;</button>
      {
        spotlightId && <ImageSpotLight imageId={spotlightId} />
      }
    </>
  );
};
    
    export default ImageRandomizer;