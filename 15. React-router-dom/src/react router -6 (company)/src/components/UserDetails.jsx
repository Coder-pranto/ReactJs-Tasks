import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
const UserDetails = () => {

    const {name} = useParams();
    const location = useLocation();
    const {id, user_name, details} = location.state;

  return (
    <div>
        <h2 className='text-uppercase text-center'>Welcome {name}.</h2>
        <h3 className='text-primary'>Your UserId is : {id}</h3>
        <h3>{user_name} , Your details is : {details} </h3>
    </div>
  )
}

export default UserDetails