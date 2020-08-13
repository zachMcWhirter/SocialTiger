import React from "react";
import NavBar from "../components/nav/NavBar";
import Authentication from "../components/auth/Authentication";
// import Banner from "../components/Banner";
import FolderList from "../components/folder/FolderList"
import "../components/folder/FolderList.css"

const FolderListPage = (props) => {
    return (
        <>
            {/* <Banner /> */}
            <NavBar/>
            <div className="folderListBody">
                <div className="h3-container-myFolders">
                    <h3>My Folders</h3>
                </div>
                <div className="folderList-container">
                    <FolderList
                    { ...props }/>
                </div>
            </div>
        </>
    );
};

export default Authentication(FolderListPage);