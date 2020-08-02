import React from "react";
import NavBar from "../components/nav/NavBar";
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner";
import ImageView from "../components/image/ImageView";

const ImageViewPage = (props) => {
    return (
        <>
            <Banner />
            <NavBar/>
            <div className="imageViewBody">
                <ImageView imageId={parseInt(props.match.params.imageId)} {...props} />
            </div>
        </>
    );
};

export default Authentication(ImageViewPage);