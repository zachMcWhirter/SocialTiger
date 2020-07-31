import React from "react";
import FolderImage from "./folder-image.png";
import "./Folder.css";
import { Link } from "react-router-dom";


const FolderCard = (props) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="img-container">
                    {/* I chose to make my folders clickable by wrapping the folder icon with a button here */}
                    {/* <Link to={`/images/${props.image.id}`}> */}
                    <button type="button"
                        onClick={() => props.history.push(`/folders/${props.folder.id}`)}>
                            {props.folder.folderName}
                        <img src={FolderImage} alt="folder" 
                        />
                    </button>
                    {/* </Link> */}
                    
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
        </div>
    );
};

export default FolderCard;