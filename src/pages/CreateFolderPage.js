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
            {/* <FolderForm/> */}
            <div>
                <h3>Create Folder</h3>
                <form>
                    <label for="folderNmae">Folder Name: </label>
                    <input type="text"></input>
                </form>
            </div>
        </>
    );
};

export default Authentication(CreateFolderPage);