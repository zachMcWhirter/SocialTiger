import React from "react";
import FolderImage from "./folder-image.png"
import "./Folder.css"

const FolderCard = () => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="img-container">
                    
                        <img src={FolderImage} alt="folder" />
                        <div id="text" className="card-foldername">Funny Stuff</div>
                </div>
            </div>
        </div>
    )
}

export default FolderCard;