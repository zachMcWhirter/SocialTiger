import React from "react";
import NavBar from "../components/nav/NavBar";
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner";
import FolderList from "../components/folder/FolderList"

const FolderListPage = (props) => {
    return (
        <>
            <Banner />
            <NavBar/>
            <div>
                <h3>My Folders</h3>
                <FolderList
                { ...props }/>
                <div>
                    
                </div>
            </div>
        </>
    );
};

export default Authentication(FolderListPage);