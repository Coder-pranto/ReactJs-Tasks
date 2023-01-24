import React, { useContext } from 'react'
import UserContext from './useContext';


const Comp4 = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p><span className='text-danger'>{user} : </span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum eaque earum consectetur magnam inventore facere iusto in at sed.</p>
    </div>
  )
}

export default Comp4