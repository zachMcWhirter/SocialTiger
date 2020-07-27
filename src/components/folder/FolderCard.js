import React from "react";
import FolderImage from "./folder-image.png"

const FolderCard = () => {
   
    return (
        <div className="card">
        <div className="card-content">
          <picture>
            <img src={FolderImage} alt="folder" />
            <h3>
            Name: <span className="card-foldername">Funny Stuff</span>
          </h3>
          </picture>
          
          <p>Breed: Poodle</p>
        </div>
      </div>
    )
}

export default FolderCard;