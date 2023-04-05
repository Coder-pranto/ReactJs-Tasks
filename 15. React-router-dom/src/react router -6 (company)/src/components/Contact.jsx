import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <h4>We have some other business too....</h4>

       <Link to="company">Company </Link>
       <Link to="channel">Channel </Link>
       <Link to="others">Others</Link>
 
      <Outlet/>

  
    </div>
  )
}

export default Contact