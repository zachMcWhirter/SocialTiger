import React, { useState, useEffect } from "react";
import ImageManager from "../../modules/ImageManager"
import "./ImageSpotLight.css";


const ImageSpotlight = props => {
    const [image, setImage] = useState({
      imageName: "", 
      imageDescription: "",
    });
  
    useEffect(() => {
      ImageManager.get(props.imageId).then(image => {
        setImage({
          imageName: image.imageName,
          imageDescription: image.imageDescription,
          url: image.url
        });
      });
    }, [props.imageId]);
  
    return (
      <div className="image-spotlight">
        <img className="randomImage" src={(image.url)} alt="My Img" />
        <div className="spotlight-info-container">
          <h3 className="spotlight-imageName">{image.imageName}</h3>
          <p className="spotlight-imageDescription">{image.imageDescription}</p>
        </div>
      </div>
    );
};
                                     
export default ImageSpotlight;