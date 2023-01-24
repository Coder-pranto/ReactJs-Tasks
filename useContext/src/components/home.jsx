import React, { useState } from 'react';
import Comp1 from './comp1.jsx';
import UserContext from './useContext.jsx';

const Home = () => {
  const [user, setUser] = useState('Jesse Hall');
  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Comp1 />
      </UserContext.Provider>
    </div>
  );
};

export default Home;
