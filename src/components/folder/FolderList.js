import React, { useState, useEffect } from "react";
import FolderCard from "./FolderCard";
import FolderManager from "../../modules/FolderManager";
import "./FolderList.css"

const FolderList = (props) => {
    const [folders, setFolders] = useState([]);

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

    const deleteFolder = id => {
        FolderManager.delete(id)
            .then(() => FolderManager.getAll()
            .then(setFolders));
    };

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/folders/CreateFolder") }}>
                    Add New Folder
            </button>
            </section>
            <div className="container-cards">
                {folders.map(folder => 
                    <FolderCard 
                        key={folder.id}
                        folder={folder}
                        deleteFolder={deleteFolder}
                        { ...props}
                    />
                )}
            </div>
        </>
    );
}

export default FolderList;