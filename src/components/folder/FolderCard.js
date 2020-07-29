import React from "react";
import FolderImage from "./folder-image.png"
import "./Folder.css"

const FolderCard = () => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="img-container">
                    {/* perhaps a wrapping the image with a button would be a better solution here */}
                    <button type="button" 
                            onClick="">
                            Folder
                        <img src={FolderImage} alt="folder" />
                    </button>
                    <div id="text" className="card-foldername"></div>
                </div>
            </div>
        </div>
    )
}

export default FolderCard;