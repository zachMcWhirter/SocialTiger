import React from "react";
import Login from "../components/auth/Login";
import {withRouter} from "react-router-dom";
// import Banner from "../components/Banner";

const LoginPage = (props) => {

    return (
        <>
            {/* <Banner />  */}
            <Login { ...props}/>
        </>
    )
};

export default withRouter(LoginPage);