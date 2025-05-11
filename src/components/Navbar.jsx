
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full top-0 px-6 py-4 border-b shadow-md bg-blue-50'>
      <h1 className='text-green-300 font-bold text-lg ml-16'>STUDY HUB</h1> 
      <ul className='flex space-x-4 pr-3'>
        <li className='p-4  font-bold hover:bg-blue-200 hover:rounded-4xl text-black'>
          <Link to="/home">Home</Link>
        </li>
        <li className='p-4 font-bold  hover:bg-blue-200 hover:rounded-4xl text-black'>
          <Link to="/courses">Courses</Link>
        </li>
        <li className='p-4 font-bold  hover:bg-blue-200 hover:rounded-4xl text-black'>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
