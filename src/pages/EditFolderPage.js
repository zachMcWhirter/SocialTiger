import React from "react";
import NavBar from "../components/nav/NavBar";
import Authentication from "../components/auth/Authentication";
// import Banner from "../components/Banner";
import FolderEditForm from "../components/folder/FolderEditForm";

const EditFolderPage = (props) => {
    return (
        <>
            {/* <Banner /> */}
            <NavBar />
            <div>
                <h3>Edit Folder</h3>
                <FolderEditForm
                { ...props } />
            </div>
        </>
    );
};

export default Authentication(EditFolderPage);