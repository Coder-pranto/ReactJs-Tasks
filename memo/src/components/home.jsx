import React, { useState } from 'react'
import Message from './message';
import MessageCounter from './messageCounter';

const Home = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <h3>Count : {count}</h3>
     <button className='btn btn-sm btn-primary' onClick={ () => setCount(count+1)}>Increment</button>
     {console.log("app render")}
     <Message/>
     <MessageCounter counter={count}/>
    </div>
  )
}

export default Home