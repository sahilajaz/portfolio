import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  return (
    <nav className='w-full p-7 flex justify-between relative'>
      <div className='flex justify-between items-center px-16 py-5 w-full'>
        <h2 className='text-white text-2xl font-bold'>Portfolio</h2>
        <ul className='hidden md:flex font-bold text-[1.2rem] cursor-pointer'>
          <li className='text-white px-3 hover:text-gray-500'>About</li>
          <li className='text-white px-3 hover:text-gray-500'>Skills</li>
          <li className='text-white px-3 hover:text-gray-500'>Projects</li>
          <li className='text-white px-3 hover:text-gray-500'>Contact</li>
        </ul>
        <div className='md:hidden'>
          <button onClick={handleToggle} className='text-white'>
            {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>
      {toggle && (
        <ul className='absolute top-full left-0 right-0 flex flex-col items-center font-bold text-[1.2rem] cursor-pointer mt-2 bg-gray-700 p-4 w-full'>
          <li className='text-white px-3 py-2 hover:text-gray-500 border-b border-gray-500 last:border-b-0 w-full text-center'>
            About
          </li>
          <li className='text-white px-3 py-2 hover:text-gray-500 border-b border-gray-500 last:border-b-0 w-full text-center'>
            Skills
          </li>
          <li className='text-white px-3 py-2 hover:text-gray-500 border-b border-gray-500 last:border-b-0 w-full text-center'>
            Projects
          </li>
          <li className='text-white px-3 py-2 hover:text-gray-500 last:border-b-0 w-full text-center'>
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
