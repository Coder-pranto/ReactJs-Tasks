import React from 'react'
import {useNavigate } from 'react-router-dom'
const Product = () => {
  const navigate = useNavigate()
  return (
    <div>
      


      <button onClick={() => navigate("/")} className='btn btn-sm btn-primary'>Go to home page</button>
    </div>
  )
}

export default Product