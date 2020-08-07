import React from "react";
import NavBar from "../components/nav/NavBar";
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner";
import FolderList from "../components/folder/FolderList"
import "../components/folder/FolderList.css"

const FolderListPage = (props) => {
    return (
        <>
            <Banner />
            <NavBar/>
            <div className="folderListBody">
                <h3>My Folders</h3>
                <div className="folderList-container">
                    <FolderList
                    { ...props }/>
                </div>
            </div>
        </>
    );
};

export default Authentication(FolderListPage);