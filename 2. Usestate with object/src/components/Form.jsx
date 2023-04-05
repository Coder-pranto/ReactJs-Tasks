import React, { useState } from 'react';

export default function Form() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    console.log('form submitted');
    console.log(user);

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="p-2 text-center">Register</h3>
        <div className="form-group">
          <label >Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label >Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button
         type="submit"
          className="btn btn-primary btn-sm btn-block"
        >
          Register
        </button>
      </form>
    </div>
  );
}
