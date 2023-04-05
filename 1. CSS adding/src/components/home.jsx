import React, { useMemo, useState } from 'react';
import '../index.css'


const styleAdd = {color : "red",fontSize:"3rem"};
const Home = () => {
  const [count, setCount] = useState(0);

  const data = useMemo (() => {
    let x = 0;
    for (let i = 0; i < 5000000000; i++) {
      x++;
    }
    return x;
  }, []);

  return (
    <div className="m-3">

      <h3>Count : {count}</h3>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {console.log('app render')}

      <h2 style={{color : "green",fontFamily:"Helvetica"}}>Calculation: {data}</h2>
      <h3 style={styleAdd}>Calculation: {data}</h3>
      <h3 className='newStyle'>Calculation: {data}</h3>
      <h3 className='newStyle2'>Calculation: {data}</h3>

    </div>
  );
};

export default Home;
