import React from "react";
import NavBar from "../components/nav/NavBar"
import Authentication from "../components/auth/Authentication";
// import Banner from "../components/Banner"
import FolderForm from "../components/folder/FolderForm"
import "./CreateImagePage.css"

const CreateFolderPage = (props) => {

    return (
        <>
            {/* <Banner/> */}
            <NavBar/>
            <div className="underNav">
                <h3>Create Folder</h3>
               <FolderForm
               { ...props}
               />
            </div>
        </>
    );
};

export default Authentication(CreateFolderPage);