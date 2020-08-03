import React, { useState, useEffect } from "react";
import ImageManager from "../../modules/ImageManager";
import FolderManager from "../../modules/FolderManager";

const ImageForm = (props) => {
    const [image, setImage] = useState({
        imageName: "",
        imageDescription: "",
        url: "",
        folderId: props.folderId
        
    });

    const [folders, setFolders] = useState([]);

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
            // This will parse the "" string value of folderId from ImageEditForm and make it an integer
            image.folderId = parseInt(image.folderId)
            // Create the Image and redirect user to Image list
            ImageManager.post(image)
            .then(() => props.history.push("/folders"))
        }
    };

    const getFolders = () => {
        // After the data comes back from the API, we use the setFolders function to update state
        return FolderManager.getAll()
            .then(foldersFromAPI => {
                setFolders(foldersFromAPI);
            });
    }

    useEffect(() => {
        getFolders();
    }, []);

    return (
        <>
            <form>
                <fieldset className="imageForm">
                    <div className="formgrid">
                        {/* dropdown select to choose the folder you want to create the image in */}
                    <select
                        onChange={handleFieldChange}
                        id='folderId'
                        placeholder='FolderId'>
                        <option>Select</option>
                            {folders.map((folder) => (
                                <option key={folder.id} value={folder.id}>
                                {folder.folderName}
                                </option>
                            ))}  
                    </select> 
                        <br/>      
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="imageName"
                            placeholder="Image Name"
                            value={image.imageName}
                        />
                        <br/>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="imageDescription"
                            placeholder="Image Description"
                            value={image.imageDescription}
                        />
                        <br/>
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