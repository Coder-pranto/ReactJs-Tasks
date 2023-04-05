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

/* This is an object destructuring shorthand syntax in JavaScript.

In the given code snippet, it is creating an object data with two properties username and roll. The values of these properties are being assigned using the state variables username and roll declared using the useState hook.

The shorthand syntax is used to avoid repeating the property names when creating an object with the same name as the variables. It is equivalent to writing:



const data = {
  username: username,
  roll: roll
};

The shorthand syntax is more concise and easier to read. */