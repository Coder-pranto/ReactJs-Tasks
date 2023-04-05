import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const User = () => {

  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState();
  const [searchParams, setSearchparams] = useSearchParams();//query parameter

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchparams({name: username, age: userage});
  }
  return (
    <div>
        <h2 className='m-2 text-center '> User </h2>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto aspernatur libero cumque est consectetur aut explicabo corrupti quod, ipsam necessitatibus assumenda dolore vitae unde ipsa pariatur autem maiores modi. Suscipit, error porro! Velit, cupiditate repellendus! Temporibus libero dolores blanditiis, dolore nobis alias magni doloribus velit soluta deleniti quasi quia maiores illo iure ducimus voluptatum ipsam iste. Magni perspiciatis numquam, ea molestias reiciendis tempora autem impedit non at distinctio modi aspernatur beatae repudiandae accusantium. Temporibus ut inventore repellat facilis, voluptate rem, velit possimus porro odio nisi quasi suscipit veritatis deserunt eos eius doloribus hic quibusdam nesciunt quos. Molestias molestiae distinctio, temporibus !</p>
        <form onSubmit={handleSubmit} className='w-50 p-2 mx-auto'>
          <div class="form-group">
            <label htmlFor="name">UserName</label>
            <input type="text" className="form-control" id="name" value= {username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div class="form-group">
            <label htmlFor="age">Age</label>
            <input type="text" className="form-control" id="age" value= {userage} onChange={(e) => setUserage(e.target.value)}/>
          </div>

          <button type="submit" class="btn btn-sm btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default User