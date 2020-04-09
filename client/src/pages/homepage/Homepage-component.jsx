import React, { Profiler } from "react";
import Directory from "../../components/directory/directory.components";

import { HomePageContainer } from "./homepage.styles";
const Homepage = () => {
  // throw Error; want to test the error boundary
  return (
    <HomePageContainer>
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration,
          });
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default Homepage;
