import React from "react";
import NavBar from "../components/nav/NavBar"
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner"
import FolderForm from "../components/folder/FolderForm"

const CreateFolderPage = () => {

    return (
        <>
            <Banner/>
            <NavBar/>
            
            <div>
                <h3>Create Folder</h3>
               <FolderForm/>
            </div>
        </>
    );
};

export default Authentication(CreateFolderPage);