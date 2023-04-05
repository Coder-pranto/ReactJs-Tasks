import React,{ useState } from 'react';
import Home from './components/home';
import Contact from './components/contact';
import Language from './components/language';
import Errorpage from './components/errorpage';
import Navbar from './components/Navbar';
import Blog from './components/blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/user';
import Protected from './components/protected';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <button className='btn btn-warning btn-sm m-2' onClick={()=>{
      setIsLoggedIn(!isLoggedIn)
       }}>{isLoggedIn ?  'SignOut': 'SignIn ' } </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/language" element={<Language />} />
          <Route path="/language/:title" element={<Blog/>} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/user" element={<Protected isLoggedIn={isLoggedIn}> <User /> </Protected> } />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
