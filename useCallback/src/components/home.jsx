import React, { useCallback, useState } from 'react';

import MessageCounter from './messageCounter';

const Home = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);


  const handleIncrement= useCallback(()=> {
    setCount(count+1)
  },[count])

  return (
    <div className="m-3">
      {toggle ? 'on' : 'off'}
      <button
        className="btn btn-sm btn-secondary mx-2 my-3"
        onClick={() => setToggle(!toggle)}
      >
        click
      </button>

      <h3>Count : {count}</h3>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {console.log('app render')}

      <MessageCounter onHandleIncrement ={handleIncrement} />
    </div>
  );
};

export default Home;
