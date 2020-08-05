import React, { useState, useEffect } from "react";
import FolderCard from "./FolderCard";
import FolderManager from "../../modules/FolderManager";
import "./FolderList.css"

const FolderList = (props) => {
    const [folders, setFolders] = useState([]);
    const user = (sessionStorage.getItem("credentials"));
    
    const getFolders = (userId) => {
       // Use the getByFolderId() fetch call to sort the images by folderId. Be sure to pass (folderId) to getImages() and getByFolderId().
        return FolderManager.getByUserId(userId)
            .then(foldersFromAPI => {
                setFolders(foldersFromAPI);
                    
            });
    }
    // Use the getByUserId() fetch call to sort the images by folderId. Be sure to pass (folderId) to getImages() and getByFolderId().
    useEffect(() => {
        console.log(user, user.email);

        FolderManager.getByUserId(user.id)
            .then((res) =>  {console.log(res)
                setFolders(res)})
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
                hey
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