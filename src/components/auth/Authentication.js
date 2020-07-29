import React from "react";
import { Redirect } from "react-router-dom";

const Authentication = (Component) => {

    const userLoggedIn = () => {
        return window.sessionStorage.credentials !== undefined ? true : false
    };
    return (props) => {
        if (userLoggedIn()) {
            return <Component {...props} />
        } else {
            return <Redirect to="/" />
        }
    }
};

export default Authentication;