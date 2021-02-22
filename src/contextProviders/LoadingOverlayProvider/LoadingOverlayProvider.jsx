import React, { createContext, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';

import MyClipLoader from 'src/components/MyClipLoader';

export const LoadingOverlayContext = createContext({});

const LoadingOverlayProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingOverlayContext.Provider value={{ loading, setLoading }}>
      <LoadingOverlay active={loading} spinner={<MyClipLoader />}>
        {children}
      </LoadingOverlay>
    </LoadingOverlayContext.Provider>
  );
};

export default LoadingOverlayProvider;
