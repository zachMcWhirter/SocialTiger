import React from "react";
import NavBar from "../components/nav/NavBar"
import Authentication from "../components/auth/Authentication";
import ImageEditorResource from "../components/image/ImageEditor"


const ImageEditorPage = (props) => {

    return (
        <>
            {/* <Banner/> */}
            <NavBar />
            <div className="underNav-editor">
                <h3>Image Editor</h3>
                <ImageEditorResource
                    {...props}
                />
            </div>
        </>
    );
};

export default Authentication(ImageEditorPage);