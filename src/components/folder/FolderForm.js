import React, { useState } from "react";
import FolderManager from "../../modules/FolderManager";

const FolderForm = (props) => {
    const [folder, setFolder] = useState({
        folderName: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = e => {
        const stateToChange = { ...folder };
        stateToChange[e.target.id] = e.target.value;
        setFolder(stateToChange);
    };

    const clearInputFields = () => {
        setFolder({folderName: ""});
    }

    const createNewFolder = e => {
        e.preventDefault();
        if (folder.folderName === "") {
            window.alert("Please input a folder name");
        } else {
            setIsLoading(true);
            // Create the folder and redirect user to folder list
            FolderManager.post(folder)
            .then(() => {props.getFolders()
            setIsLoading(false)
            clearInputFields();
            });
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
                                type="button"
                                disabled={isLoading}
                                onClick={createNewFolder}
                            >Submit</button>
                            <input type="reset" defaultValue="Reset" id="resetButton"/>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default FolderForm;