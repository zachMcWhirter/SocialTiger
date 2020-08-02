import React from "react";
import NavBar from "../components/nav/NavBar"
import Authentication from "../components/auth/Authentication";
import Banner from "../components/Banner"
import ImageRandomizer from "../components/image/ImageRandomizer"

const HomePage = (props) => {

  return (
      <>
        <Banner/>
        <NavBar/>
        <div className="homePageBody">
          <ImageRandomizer 
          { ...props }/>
        </div>
      </>
  );
};

export default Authentication(HomePage);