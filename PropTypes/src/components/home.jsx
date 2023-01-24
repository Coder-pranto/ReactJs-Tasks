import React, { useState } from 'react';
import Helper1 from './helper 1';
import Helper2 from './helper 2';

const Home = () => {
  const [username, setUsername] = useState("Riaj Hasan");
  const [roll, setRoll] = useState(123);
  const [info, setInfo] = useState({id:101, name:"Pranto"})

  const data = {
    username,
    roll
  };
  return (
    <div>
      <Helper1 data={data} />
      <Helper2 username={username} roll={roll} info={info} />
    </div>
  );
};

export default Home;
