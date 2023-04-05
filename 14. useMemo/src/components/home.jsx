import React, { useMemo, useState } from 'react';



const Home = () => {
  const [count, setCount] = useState(0);

  const data = useMemo(() => {
    let x = 0;
    for (let i = 0; i < 5000000000; i++) {
      x++;
    }
    return x;
  }, []);

  return (
    <div className="m-3">

      <h3>Count : {count}</h3>
      <button className="btn btn-sm btn-primary" onClick={() => setCount(count + 1)}> Increment </button>

      {console.log('app render')}

      <h2>Calculation: {data}</h2>

    </div>
  );
};

export default Home;
