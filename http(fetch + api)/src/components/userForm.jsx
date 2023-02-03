import React, { useState } from 'react'

const UserForm = (props) => {
const [user, setUser] = useState({
    username:"",
    email:""
})

const {username, email} = user;

const handleChange = (e) => { 
    const x = e.target.name;
    const y = e.target.value;
    setUser(prevState=> {
        return {...prevState, [x]: y}
    })
 }


 const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmitData(user);
    setUser({
      username:"",
      email:""
  })
 }
  return (
    <>
        <form className="w-50 mx-auto border border-warning p-2" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="username" value={username} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" name="email" value={email} onChange={handleChange}  className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <button className="btn btn-sm btn-primary">{props.btnTxt}</button>
        </div>
      </form>

    </>
  )
}

export default UserForm