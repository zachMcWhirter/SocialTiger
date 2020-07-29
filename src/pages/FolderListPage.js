import React from "react";
import NavBar from "../components/nav/NavBar";
import FolderCard from "../components/folder/FolderCard";
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner";
import FolderList from "../components/folder/FolderList"

const FolderListPage = () => {
    return (
        <>
            <Banner />
            <NavBar/>
            <div>
                <h3>FolderList</h3>
                <FolderList/>
                <div>
                    <FolderCard/>
                    <FolderCard/>
                    <FolderCard/>
                </div>
            </div>
        </>
    );
};

export default Authentication(FolderListPage);