import React from "react";
import NavBar from "../components/nav/NavBar";
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner";
import ImageList from "../components/image/ImageList"

const ImageListPage = (props) => {
    return (
        <>
            <Banner />
            <NavBar/>
            <div>
                <h3>My Images</h3>
                <ImageList
                { ...props }/>
                <div>
                    
                </div>
            </div>
        </>
    );
};

export default Authentication(ImageListPage);