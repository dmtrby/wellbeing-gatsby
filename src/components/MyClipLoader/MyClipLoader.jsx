import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const MyClipLoader = ({ withWrapper }) => {
  if (withWrapper) {
    return (
      <div className="row algin-items-center flex-justify-center height-100-perc">
        <ClipLoader color="#3AB7B9" size={50} />
      </div>
    );
  }
  return <ClipLoader size={50} color="#3AB7B9" />;
};

export default MyClipLoader;
