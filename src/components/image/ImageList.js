import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import ImageManager from "../../modules/ImageManager";
import "../folder/FolderList.css"


const ImageList = (props) => {
    const [images, setImages] = useState([]);

    const getImages = (folderId) => {
        // Use the getByFolderId() fetch call to sort the images by folderId. Be sure to pass (folderId) to getImages() and getByFolderId().
        return ImageManager.getByFolderId(folderId)
            .then(imagesFromAPI => {
                setImages(imagesFromAPI);
            });
    }
    // Use the getByFolderId() fetch call to sort the images by folderId. Be sure to pass (folderId) to getImages() and getByFolderId().
    useEffect(() => {
        getImages(props.match.params.folderId);
    }, [props.match.params.folderId]);

    const deleteImage = id => {
        ImageManager.delete(id)
            .then(() => ImageManager.getAll()
                .then(setImages))
            .then(() =>
                props.history.push("/folders/")

            );
    };

    console.log("MoreProps", props);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/folders/:folderId/images/CreateImage") }}>
                    Add New Image
                </button>
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/folders/") }}>
                    Back to Folders
                </button>

            </section>
            <div className="container-cards">
                {images.map(image =>
                    <ImageCard
                        key={image.id}
                        folder={image.folderId}
                        image={image}
                        deleteImage={deleteImage}
                        {...props}
                    />
                )}
            </div>
        </>
    );
}

export default ImageList;