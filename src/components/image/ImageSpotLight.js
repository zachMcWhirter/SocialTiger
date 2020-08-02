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
        <div>
          <h3>{image.imageName}</h3>
          <p>{image.imageDescription}</p>
        </div>
      </div>
    );
};
                                     
export default ImageSpotlight;