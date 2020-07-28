import React from "react";
import FolderImage from "./folder-image.png"
import "./Folder.css"

const FolderCard = () => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="img-container">
                    {/* perhaps a wrapping the image with a button would be a better solution here */}
                    <img src={FolderImage} alt="folder" />
                    <div id="text" className="card-foldername">Folder</div>
                </div>
            </div>
        </div>
    )
}

export default FolderCard;