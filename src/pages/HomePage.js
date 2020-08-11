import React from "react";
import NavBar from "../components/nav/NavBar"
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner"
import ImageRandomizer from "../components/image/ImageRandomizer"
import Welcome from "../components/Welcome"

const HomePage = (props) => {

  return (
      <>
        <Banner/>
        <NavBar/>
        <div className="homePageBody">
          <Welcome 
          { ...props }/>
          <ImageRandomizer 
          { ...props }/>
        </div>
      </>
  );
};

export default Authentication(HomePage);