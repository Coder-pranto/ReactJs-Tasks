import React, { useRef, useState } from 'react';

const UseForm = () => {
  const usernameRef = useRef();
  const userpasswordRef = useRef();

  const [first, setFirst] = useState();
  const [second, setSecond] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = usernameRef.current.value;
    const password = userpasswordRef.current.value;
    setFirst(userName);
    setSecond(password);

    usernameRef.current.style.color = 'green'; // dom manipulation

    console.log({ userName, password }); // useRef return a object
  };

  return (
    <>
      <form className="w-25" onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" class="form-control"  ref ={usernameRef}/>
        </div>
        <div class="form-group">
          <label htmlFor="password">Name</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            ref ={userpasswordRef}
          />
        </div>
        <div class="form-group">
          <button className="btn btn-sm btn-primary">Submit</button>
        </div>
      </form>

      <div className="border border-warning p-2">
        <p>your username : {first} </p>
        <p>your password : {second}</p>
      </div>
    </>
  );
};

export default UseForm;

/* 

useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).

Accessing DOM Elements

In general, we want to let React handle all DOM manipulation.

But there are some instances where useRef can be used without causing issues.

In React, we can add a ref attribute to an element to access it directly in the DOM.


*/
