import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import ImageManager from "../../modules/ImageManager";

const ImageList = (props) => {
    const [images, setImages] = useState([]);

    const getImages = () => {
        // After the data comes back from the API, we use the setImages function to update state
        return ImageManager.getAll()
            .then(imagesFromAPI => {
                setImages(imagesFromAPI);
            });
    }

    useEffect(() => {
        getImages();
    }, []);

    const deleteImage = id => {
        ImageManager.delete(id)
            .then(() => ImageManager.getAll()
            .then(setImages));
    };

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/images/CreateImage") }}>
                    Add New Image
            </button>
            </section>
                
            <div className="container-cards">
                {images.map(image => 
                    <ImageCard 
                        key={image.id}
                        image={image}
                        deleteImage={deleteImage}
                        { ...props}
                    />
                )}
            </div>
        </>
    );
}

export default ImageList;