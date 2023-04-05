import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
     <h2> ErrorPage</h2>
      <Link to="/"> Go to Home page</Link>
    </div>
  );
};

export default ErrorPage;
