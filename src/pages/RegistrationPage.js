import React from "react";
import Registration from "../components/auth/RegisterNewUser";
import {withRouter} from "react-router-dom";
import Banner from "../components/Banner";

const RegistrationPage = (props) => {

    return (
        <>
            <Banner/>
            <Registration { ...props}/>
        </>
    )
};

export default withRouter(RegistrationPage);