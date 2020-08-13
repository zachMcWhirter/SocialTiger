import React from "react";
import NavBar from "../components/nav/NavBar";
import Authentication from "../components/auth/Authentication";
// import Banner from "../components/Banner";
import ImageEditForm from "../components/image/ImageEditForm";

const EditImagePage = (props) => {
    return (
        <>
            {/* <Banner /> */}
            <NavBar />
            <div>
                <div className="h3-container-editImage">
                    <h3>Edit Image</h3>
                </div>
                <ImageEditForm
                { ...props } />
            </div>
        </>
    );
};

export default Authentication(EditImagePage);