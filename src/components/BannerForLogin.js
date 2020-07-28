import React from "react";

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const BannerForLogin = (props) => {

    if (isAuthenticated()) {

        return (

            <>
                <header>
                    <h1>Social Tiger</h1>
                </header>
            </>
        );
    }
};

export default BannerForLogin;