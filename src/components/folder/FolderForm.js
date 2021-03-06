import React, { useState } from "react";
import FolderManager from "../../modules/FolderManager";


const FolderForm = (props) => {

    const [folder, setFolder] = useState({
        folderName: "",
        userId: props.user.id
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = e => {
        const stateToChange = { ...folder };
        stateToChange[e.target.id] = e.target.value;
        setFolder(stateToChange);
    };

    const createNewFolder = e => {
        e.preventDefault();
        if (folder.folderName === "") {
            window.alert("Please input a folder name");
        } else {
            setIsLoading(true);

            //Filter the folders by user as they are created 
            const filteredFolder = {
                folderName: folder.folderName,
                userId: props.user.id
            };

            // This will parse the "" string value of userId from FolderEditForm and make it an integer
            // folder.userId = parseInt(filteredFolder.userId)
            // Create the folder and redirect user to folder list
            FolderManager.post(filteredFolder)
                .then(() => props.history.push("/folders"))
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
                            id="folderName"
                            placeholder="Folder Name"
                            value={folder.folderName}
                        />
                        <div className="alignRight">
                            <button
                                type="submit"
                                disabled={isLoading}
                                onClick={createNewFolder}
                            >Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default FolderForm;