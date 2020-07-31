import React, { useState } from "react";
import ImageManager from "../../modules/ImageManager";

const ImageForm = (props) => {
    const [image, setImage] = useState({
        imageName: "",
        imageDescription: "",
        url: "",
        folderId: "1"
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = e => {
        const stateToChange = { ...image };
        stateToChange[e.target.id] = e.target.value;
        setImage(stateToChange);
    };

    const createNewImage = e => {
        e.preventDefault();
        if (image.imageName === "" || image.imageDescription === "" || image.url === "") {
            window.alert("Please input an image name, image description, and url");
        } else {
            setIsLoading(true);
            // Create the Image and redirect user to Image list
            ImageManager.post(image)
            .then(() => props.history.push("/images"))
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="imageName"
                            placeholder="Image Name"
                            value={image.imageName}
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="imageDescription"
                            placeholder="Image Description"
                            value={image.imageDescription}
                        />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            placeholder="url"
                            value={image.url}
                        />
                        <div className="alignRight">
                            <button
                                type="submit"
                                disabled={isLoading}
                                onClick={createNewImage}
                            >Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default ImageForm;