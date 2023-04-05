import React, { useState } from 'react';
import Data from './data.jsx';
import { useNavigate,Link } from 'react-router-dom';

const Language = () => {
  const [lang, setLang] = useState(Data);
  const navigate = useNavigate();
  return (
    <div>
      <h2>Language</h2>
      <button onClick={() => navigate('/')}>Go to Home page</button>
      {lang &&
        lang.map((x,id) => 
         
         ( <article key={id}>
            <h3 className="text-uppercase">{x.title}</h3>
            <p className="text-justify">{x.body.substring(0, 100)}... <Link to={x.title} state={x} className='btn btn-primary btn-sm'>Learn more</Link> </p>
          </article>)
      )}
    </div>
  );
};

export default Language;
