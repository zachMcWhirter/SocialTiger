import React from "react";
import NavBar from "../components/nav/NavBar"
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner"
import ImageForm from "../components/image/ImageForm"

const CreateImagePage = (props) => {

    return (
        <>
            <Banner/>
            <NavBar/>
            <div>
                <h3>Create Image</h3>
               <ImageForm
               { ...props}
               />
            </div>
        </>
    );
};

export default Authentication(CreateImagePage);