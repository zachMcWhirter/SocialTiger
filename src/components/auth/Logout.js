import React from "react";
import { Redirect } from "react-router-dom";


const Logout = (props) => {
    sessionStorage.removeItem("credentials");
    sessionStorage.clear();
    return <Redirect to="/" />;
};
    
export default Logout;