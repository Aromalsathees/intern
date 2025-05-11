import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, Setquery] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [dataList, setDataList] = useState([]); 
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch('https://workhole.pythonanywhere.com/api/data/') 
      .then((res) => res.json())
      .then((data) => {
        setDataList(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const submitsearch = () => {
    if (query.trim()) {
      const foundItem = dataList.find((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );

      if (foundItem) {
        setNotFound(false);
        navigate(`/allsearch?q=${query}`);
      } else {
        setNotFound(true);
      }
    }
  };

  return (
    <div className='flex justify-between items-center w-full fixed top-0 left-0 z-10 px-6 py-4 border-b bg-white shadow-md'>
      <div className='lg:text-4xl text-blue-300 font-bold'>HUB</div>

      <div className='lg:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      <ul className={`lg:flex items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-6 mt-4 lg:mt-0 
        ${menuOpen ? 'block absolute top-20 left-0 w-full bg-white px-6 py-4 shadow-md' : 'hidden'} 
        lg:static lg:bg-transparent lg:flex-row lg:w-auto`}>

        <li className="hover:bg-green-200 rounded-full cursor-pointer px-5 py-3 flex items-center gap-2 font-bold">
          <span className="material-symbols-outlined text-black">home</span>
          <a href="/" className="text-black font-bold">Home</a>
        </li>

        <li className="hover:bg-green-200 rounded-full cursor-pointer px-5 py-3 flex items-center gap-2 font-bold">
          <span className="material-symbols-outlined text-black">settings</span>
          <a href="/home" className="text-black font-bold">Jobs</a>
        </li>

        <li className="hover:bg-green-200 rounded-full cursor-pointer px-5 py-3 flex items-center gap-2 font-bold">
          <span className="material-symbols-outlined text-black">person</span>
          <a href="/about" className="text-black font-bold">About Us</a>
        </li>

        <li>
          <input
            className='ml-0 lg:ml-6 mt-2 lg:mt-0 px-4 py-2 border border-green-200 rounded-full'
            type="text"
            value={query}
            onChange={(e) => Setquery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submitsearch();
            }}
            placeholder='Search...'
          />
          <button className='text-black ml-2' onClick={submitsearch}>search</button>

          {notFound && (
            <p className="text-red-500 text-sm mt-1">Item not found</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
