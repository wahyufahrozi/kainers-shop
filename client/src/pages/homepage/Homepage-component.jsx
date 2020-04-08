import React from "react";
import Directory from "../../components/directory/directory.components";

import { HomePageContainer } from "./homepage.styles";
const Homepage = () => {
  // throw Error; want to test the error boundary
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
