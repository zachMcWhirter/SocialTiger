import React from "react";
import FolderImage from "./folder-image.png";
import "./FolderList.css";



const FolderCard = (props) => {

    return (
        <div className="card">
            {/* <div className="card-content"> */}
                <div className="img-container">
                    {/* I chose to make my folders clickable by wrapping the folder icon with a button here */}
                    <button className="folderCard" type="button"
                        onClick={() => props.history.push(`/folders/${props.folder.id}`)}>
                            {props.folder.folderName}
                        <img className="folderImage" src={FolderImage} alt="folder" 
                        />
                    </button>
                    {/* </Link> */}
                <div className="button-container">
                    <button 
                        type="button" 
                        onClick={() => props.deleteFolder(props.folder.id)}>Delete
                    </button>
                    <button type="button"
                        onClick={() => props.history.push(`/folders/${props.folder.id}/edit`)}>
                        Edit
                    </button>
                </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default FolderCard;