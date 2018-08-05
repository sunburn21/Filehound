import React from "react";
const LoaderHoc = WrappedContent => {
  return props => {
    return props.links.length === 0 ? (
      <div>Loading...</div>
    ) : (
      <WrappedContent {...props} />
    );
  };
};

export default LoaderHoc;
