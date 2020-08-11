import React from "react";
import { Redirect } from "react-router-dom";

const Authentication = (Component) => {

    const getUser = () => {
        if (window.sessionStorage.credentials) {
            return JSON.parse(window.sessionStorage.credentials)
        }
        return undefined
    };
 
    return (props) => {
        const user = getUser()

        if (user) {
            return <Component user={user}{...props} />
        } else {
            return <Redirect to="/" />
        }
    }
};

export default Authentication;