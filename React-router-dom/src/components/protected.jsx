import React from 'react';

import { Navigate } from 'react-router-dom';

const Protected = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/" replace={true} />;
  }
};

export default Protected;
