import React from "react";

const Logout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("credentials");
    sessionStorage.clear();
};

export default Logout;