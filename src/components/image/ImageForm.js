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

    const currentUser = JSON.parse(sessionStorage.getItem("credentials"));

    const [user, setUser] = useState({
        id: currentUser.id
    })

    const [upload, setUpload] = useState("");
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

            // Filter the images by folder as they are created
            const filteredImage = {

                imageName: image.imageName,
                imageDescription: image.imageDescription,
                url: image.url,
                folderId: parseInt(image.folderId)
            }
            // This will parse the "" string value of folderId from ImageEditForm and make it an integer
            // image.folderId = parseInt(image.folderId)
            // Create the Image and redirect user to Image list
            ImageManager.post(filteredImage)
                .then(() => props.history.push("/folders"))
        }
    };

    const uploadImage = async e => {
        const files = e.target.files;

        // new FormData is an easy way of creating a constructor that makes key/value pairs
        const data = new FormData()
        // append is a built in method that you can use in combination with new FormData
        data.append("file", files[0])
        data.append("upload_preset", "socialTiger");
        setIsLoading(true);

        // This is a fetch call that posts the uploaded image to a pre-built folder in a Cloudinary Account
        const res = await fetch("https://api.cloudinary.com/v1_1/lordargyle22/image/upload", {
            method: "POST",
            body: data
        });
        // waiting for a response from json
        const file = await res.json();

        // When you console.log (file), you will be able to see the properties and values of the image. The property we are looking to capture is "secure_url".
        console.log(file);

        // Now we use dot notation to access the secure_url property
        setUpload(file.secure_url);
        setIsLoading(false);
        (image.url) = file.secure_url
    }

    const getFolders = () => {
        // After the data comes back from the API, we use the setFolders function to update state
        return FolderManager.getByUserId(user.id)
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
                        <br />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="imageName"
                            placeholder="Image Name"
                            value={image.imageName}
                        />
                        <br />
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="imageDescription"
                            placeholder="Image Description"
                            value={image.imageDescription}
                        />
                        <br />
                        <div>
                            <input
                                type="file"
                                name="file"
                                placeholder="Upload an Image"
                                onChange={uploadImage}
                                // value={image.url}
                                id="url"
                            />
                            {
                                // This is essentially an if/else statement written inside the return using the "?" as the if, and ":" as the else. This code reads: "if isLoading=true, then return Loading ...", "else return <img src={image} style={{width:"500px"}} /> "
                                isLoading ? (
                                    <h3>
                                        Loading ...
                                    </h3>
                                ) : (
                                        <div className="cloudinary">
                                            <img src={upload} />
                                        </div>
                                    )
                            }
                        </div>

                        <div className="alignRight">
                            <button
                                type="submit"
                                disabled={isLoading}
                                onClick={createNewImage}
                                >Submit
                            </button>
                            <button type="button"
                                className="btn"
                                onClick={() => { props.history.push("/imageEditor") }}>
                                Image Editor
                            </button>

                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default ImageForm;