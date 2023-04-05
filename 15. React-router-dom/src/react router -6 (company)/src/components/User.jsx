import React, { useState } from 'react'
import user_data from './userData';
import { Link, useSearchParams } from 'react-router-dom';

const User = () => {
  const [udata, setUdata] = useState(user_data);

  const [dept, setDept] = useState("");
  const [userage, setUserage] = useState();
  const [searchParams, setSearchparams] = useSearchParams();//query parameter

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchparams({dept: dept, age: userage});
  }

  return (
    <div className='container'>
      <h2 className='text-center'>User List</h2>
      {
        udata && udata.map((x, idx)=>{
         return <article key = {idx}>
              <h3 className="text-uppercase">{x.user_name}</h3>
            <p className="text-justify">{x.details.substring(0, 100)}... <Link to={x.user_name} state={x} className='btn btn-primary btn-sm'>Learn more</Link> </p>
          </article>
        })
      }

       <form onSubmit={handleSubmit} className='w-50 p-2 mx-auto'>
          <div class="form-group">
            <label htmlFor="name">UserName</label>
            <input type="text" className="form-control" id="name" value= {dept} onChange={(e) => setDept(e.target.value)} />
          </div>
          <div class="form-group">
            <label htmlFor="age">Age</label>
            <input type="text" className="form-control" id="age" value= {userage} onChange={(e) => setUserage(e.target.value)}/>
          </div>

          <button type="submit" class="btn btn-sm btn-primary">Submit</button>
        </form>


        <div>
          <p>your dept : <span className='text-warning'>{searchParams.get("dept")}</span></p>
          <p>your age : <span className='text-warning'>{searchParams.get("age")}</span></p>
        </div>
    </div>
  )
}

export default User