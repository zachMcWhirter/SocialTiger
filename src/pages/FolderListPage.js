import React from "react";
import NavBar from "../components/nav/NavBar"
import FolderCard from "../components/folder/FolderCard";
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner"

const FolderListPage = () => {
    return (
        <>
            <Banner/>
            <NavBar/>
            <div>
                <h2>FolderList</h2>
                <div>
                    <FolderCard/>
                    <FolderCard/>
                    <FolderCard/>
                </div>
            </div>
        </>
    );
};

export default Authentication(FolderListPage)