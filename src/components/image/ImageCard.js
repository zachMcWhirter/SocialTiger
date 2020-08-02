import React from "react";
import { Link } from "react-router-dom";
import "./ImageCard.css"



const ImageCard = (props) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="img-container">
                <picture>
                    
                    <img className="imageThunbnails" src={(props.image.url)} alt="My Background Img" />
                </picture>    
                </div>
                    <button 
                        type="button" 
                        onClick={() => props.deleteImage(props.image.id)}>Delete
                    </button>
                    <button type="button"
                        onClick={() => props.history.push(`/images/${props.image.id}/edit`)}>
                        Edit
                    </button>
                    <Link to={`/images/${props.image.id}`}>
                        <button>View Image</button>
                    </Link>
            </div>
        </div>
    );
};

export default ImageCard;