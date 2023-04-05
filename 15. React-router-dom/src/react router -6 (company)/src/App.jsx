import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
import Login from './components/Login';
import User from './components/User';
import UserDetails from './components/UserDetails';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/NavBar';

import Company from './components/pages/company';
import Channel from './components/pages/channel';
import Others from './components/pages/others';
import Protected from './components/Protected';



const App = () => {
  return (
    <>
   
    <BrowserRouter>
    
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
               
          <Route path="/product" element={<Product/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/user" element={<Protected> <User /> </Protected> } /> */}
          <Route path="/user" element={<User/>} />
          <Route path="/user/:name" element={<UserDetails/>} />
         <Route  path="/contact" element={<Contact/>}> 
           <Route index element ={<Company/>} />
           <Route path="company" element ={<Company/>} />
           <Route path="channel" element ={<Channel />} />
           <Route path="others" element ={<Others/>} />
         </Route>
    
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
