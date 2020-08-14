import React from "react";
import NavBar from "../components/nav/NavBar";
import Authentication from "../components/auth/Authentication";
// import Banner from "../components/Banner";
import ImageList from "../components/image/ImageList"
import "../components/folder/FolderList.css"

const ImageListPage = (props) => {
    return (
        <>
            {/* <Banner /> */}
            <NavBar/>
            <div className="imageListBody">
            <div className="h3-container-myImages">
                    <h3>My Images</h3>
                </div>
                <div className="imageList-container">
                    <ImageList
                    { ...props }/>
                </div>
            </div>
        </>
    );
};

export default Authentication(ImageListPage);