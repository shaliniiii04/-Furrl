// pages/index.js
import React from 'react';
import Image from "next/image";
// import Main from './components/Main/page';
import Main from './components/Main';
import Navbar from './components/Navbar';
const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar/>
     <Main/>
      
    </div>
  );
};

export default Home;
