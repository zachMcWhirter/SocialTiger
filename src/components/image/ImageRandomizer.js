import React, { useState, useEffect } from "react";
import ImageSpotLight from "../image/ImageSpotLight";
import ImageManager from "../../modules/ImageManager";

const ImageRandomizer = (props) => {
    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightImage = () => {
      ImageManager.getRandomImageForUser(props.user.id).then(image => setSpotlightId(image.id));
    };

    useEffect(() => {
      refreshSpotlightImage();
    }, [props.imageId]);

    return (
        <>
          {/* <h3>Image Randomizer</h3> */}
          <button onClick={refreshSpotlightImage}>Reload &#x27f3;</button>
          {
            spotlightId && <ImageSpotLight imageId={spotlightId} />
          }
        </>
      );
    };

    export default ImageRandomizer;