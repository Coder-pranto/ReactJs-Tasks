import React from 'react'
import { useNavigate } from "react-router-dom";
const Errorpage = () => {
    const navigate = useNavigate();
  return (
    <div><h2>Errorpage</h2>
        <button onClick={()=> navigate('/')}>Go to Home page</button>
    </div>
    
  )
}

export default Errorpage