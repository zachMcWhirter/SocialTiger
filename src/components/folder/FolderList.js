import React, { useState, useEffect } from "react";
import FolderCard from "./FolderCard";
import FolderManager from "../../modules/FolderManager";
import "./FolderList.css"

const FolderList = (props) => {
    const [folders, setFolders] = useState([]);

    // const currentUser = JSON.parse(sessionStorage.getItem("credentials"))

    // the user's "credentials" are saved in sessionStorage as an object
    //  containing 3 separate key:value strings. So you need to 
    //  convert it to a javascript object by wrapping it in JSON.parse()
    const [user, setUser] = useState({
        id: props.user.id
    });

    //    Use the getByUserId() fetch call to sort 
    //    the folders by userId.       
    useEffect(() => {

        FolderManager.getByUserId(user.id)
            .then((res) => {
                console.log(res)
                setFolders(res)
            })
    }, []);

    const deleteFolder = id => {
        FolderManager.delete(id)
            .then(() => FolderManager.getByUserId(user.id)
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
                        {...props}
                    />
                )}
            </div>
        </>
    );
}

export default FolderList;