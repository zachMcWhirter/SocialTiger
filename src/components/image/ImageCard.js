import React from "react";
import { Link } from "react-router-dom";


const ImageCard = (props) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="img-container">
                    
                    {/* <Link to={`/images/${props.image.id}`}> */}
                    {/* <button type="button"
                        onClick={() => props.history.push(`/images/${props.image.id}`)}>
                            {props.image.imageName} */}
                        {/* <img src={FolderImage} alt="image" 
                        /> */}
                    {/* </button> */}
                    {/* </Link> */}
                    
                    <button 
                        type="button" 
                        onClick={() => props.deleteImage(props.image.id)}>Delete
                    </button>
                    <button type="button"
                        onClick={() => props.history.push(`/images/${props.image.id}/edit`)}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;