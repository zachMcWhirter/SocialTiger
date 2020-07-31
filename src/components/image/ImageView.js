import React, { useState, useEffect } from 'react';
import ImageManager from '../../modules/ImageManager';
import './ImageView.css';

const ImageView = props => {
    const [image, setImage] = useState({ 
        imageName: "", 
        imageDecsription: "", 
        url: "" });

    const [isLoading, setIsLoading] = useState(true);
    //   isLoading is a boolean value that will indicate whether or not the component is loading. A value of true should disable the button and a value of false should enable it. By putting isLoading in the component's state, we can trigger a re-render by changing its value.

    useEffect(() => {
        //get(id) from ImageManager and keep the data. put it into state
        ImageManager.get(props.imageId)
            .then(image => {
                setImage({
                    imageName: image.imageName,
                    imageDescription: image.imageDecsription,
                    url: image.url
                });
                setIsLoading(false)
                // when isLoading changes to false, the button will become functional
                
            });
            
    }, [props.imageId]);

    const handleDelete = () => {
        //invoke the delete function in ImageManger and re-direct to the image list.
        setIsLoading(true);
        ImageManager.delete(props.imageId).then(() =>
        //   props.history.push("/images") takes you back to the main images page (ImageList) and loads the remaining images after deleting the imageId you selected.
          props.history.push("/images")
        //   Do not forget to update ApplicationViews.js to include {...props} at the end of the ImageDetail route path
        );
      };
    
    return (
        // this is where we use JSX to tell the browser what an ImageDetail card will look like. And return it
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={(image.url)} alt="My Img" />
                </picture>
                <h3>Image Name: <span style={{ color: 'darkslategrey' }}>{image.imageName}</span></h3>
                <p>Description: {image.imageDescription}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Delete
                </button>
                {/* <a download={image.url} >
                    <button type="button" disabled={isLoading} >
                        Download
                    </button>
                </a> */}
            </div>
        </div>
    );
}

export default ImageView;