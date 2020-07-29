import React from "react";
import { Redirect } from "react-router-dom";


const Logout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("credentials");
    sessionStorage.clear();
    // <Redirect to="/login" />;
};
    
export default Logout;