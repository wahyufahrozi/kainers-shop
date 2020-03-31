import React from "react";

import { LoadingOverlay, LoadingContainer } from "./loading.styles";

const Loading = WrappedComponent => {
  const Loading = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <LoadingOverlay>
        <LoadingContainer />
      </LoadingOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Loading;
};
export default Loading;
