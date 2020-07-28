import React from "react";
import Login from "../components/auth/Login";
import {withRouter} from "react-router-dom";
import BannerForLogin from "../components/BannerForLogin";

const LoginPage = (props) => {

    return (
        <>
            <BannerForLogin/>
            <Login { ...props}/>
        </>
    )
};

export default withRouter(LoginPage);