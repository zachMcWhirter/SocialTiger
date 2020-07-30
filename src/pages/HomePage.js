import React from "react";
import NavBar from "../components/nav/NavBar"
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner"
import {withRouter} from "react-router-dom";

const HomePage = () => {

  return (
      <>
        <Banner/>
        <NavBar/>
      </>
  );
};

export default Authentication(HomePage);