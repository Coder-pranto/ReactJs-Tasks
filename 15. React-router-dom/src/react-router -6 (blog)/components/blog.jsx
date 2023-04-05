import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();
  const { body } = location.state;

  return (
    <div>
      <h2 className="text-uppercase">{title} page</h2>
      <p className="text-justify">{body}</p>
    </div>
  );
};

export default Blog;
