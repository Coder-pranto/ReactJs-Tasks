import React, { useEffect, useState } from 'react'
import UserForm from './userForm';



const Home = () => {

  const [alldata, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users/1/posts";


  const fetchData = async() => {
    try {
      const res = await fetch(url);
      if(!res.ok)
      {
        throw Error("could not fetch data");
      }

      const data = await res.json();
       setData(data);
       console.log(data);
       setIsLoading(false);
       setError(null);

    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
   
    fetchData();
  
  }, [])

  const handleDelete = async(idx) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${idx}`,{
        method:"DELETE",
      });
      if(!res.ok)
      {
        throw Error("could not DELETE");
      }
      else{
        fetchData();
      }
    } catch (error) {
      setError(error.message);
    }
    
  }

  const addUser= async(user)=>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if(res.status === 201)
      {
        console.log("user is added");
        fetchData();
      }
      else{
        throw Error("could not Add user");
      }
    } catch (error) {
      setError(error.message);
    }  
  }
  

  return (
    <div className="container">
      <h1 className="text-center text-capitalize m-3">User management app</h1>
      <UserForm btnTxt ="Submit" handleSubmitData ={addUser}/>
  
      {isLoading && <h4> data is loading...</h4>}
      {error && <h4> {error} </h4>}

      {alldata.map(function (user, id) {
        return (
          <div className="card-group m-2 text-white " key={id}>
            <div className="card bg-secondary">
              <div className="card-body">
                <h4 className="card-title">
                  {user.id}- {user.title}
                </h4>
                <p className="card-text">{user.body}</p>
                <div className="opt">
                  <button className="btn btn-sm btn-primary mx-2">Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={()=> handleDelete(user.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home