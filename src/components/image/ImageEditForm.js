import React, { useState, useEffect } from "react";
import ImageManager from "../../modules/ImageManager";
import FolderManager from "../../modules/FolderManager"
import ImageUpload from "./ImageUpload"

const ImageEditForm = props => {
    const [image, setImage] = useState({ 
      imageName: "", 
      imageDescription: "", 
      url: "",
      folderId: props.folderId
    });

    const [isLoading, setIsLoading] = useState(false);

    // This is setting state for folders that are responsible for each Image
    // We need the empty array here so we can use map() method to go thru the folders and match them to the images that go inside them.
    const [folders, setFolders] = useState([]);

    // This is an event that is triggered 
    const handleFieldChange = e => {

        const stateToChange = { ...image };
        stateToChange[e.target.id] = e.target.value;
        setImage(stateToChange);
    };

    const updateExistingImage = e => {
        e.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need to use the id
        const editedImage = {
            id: props.match.params.imageId,
            imageName: image.imageName,
            imageDescription: image.imageDescription,
            url: image.url,

            // This will parse the "" string value of employeeId from const AnimalEditForm and make it an integer
            folderId: parseInt(image.folderId)
        };
        
        ImageManager.update(editedImage)
        .then(() => props.history.push("/folders")) 
    }
    
      // This is where we select an image, get that imageId, and set it. Then we go thru each one, comparing it the employees 
      useEffect(() => {
        ImageManager.get(props.match.params.imageId)
          .then(image => {
            FolderManager.getAll()
            .then(folders => {
              setFolders(folders)
              setImage(image);
              setIsLoading(false);
            })
      });
  } , [props.match.params.imageId]);

    return (
    <>
      <form>
        <fieldset>
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
              className="form-control"
              onChange={handleFieldChange}
              id="imageName"
              value={image.imageName}
            />
            <label htmlFor="imageName">Image name</label>
            <br/>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="imageDescription"
              value={image.imageDescription}
            />
            <label htmlFor="imageDescription">Description</label>
            <br/>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              placeholder="url"
            />
            <br />
            <ImageUpload { ...props } />
            <br/>
          </div>
          
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingImage}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ImageEditForm;