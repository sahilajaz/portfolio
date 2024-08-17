import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='w-full p-5 fixed top-0 left-0 bg-[#19376D] z-50'>
      <div className='flex justify-between items-center px-10 sm:px-6 py-3 w-auto sm:w-full'>
        <h2 className='text-white text-3xl font-bold'>Portfolio</h2>
        <ul className='hidden md:flex font-bold text-[1.2rem] cursor-pointer'>
          <li className='text-white px-3 hover:text-gray-500' onClick={() => scrollToSection('about')}>About</li>
          <li className='text-white px-3 hover:text-gray-500' onClick={() => scrollToSection('skills')}>Skills</li>
          <li className='text-white px-3 hover:text-gray-500' onClick={() => scrollToSection('projects')}>Projects</li>
          <li className='text-white px-3 hover:text-gray-500' onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        <div className='md:hidden'>
          <button onClick={handleToggle} className='text-white'>
            {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>
      {toggle && (
        <ul className='absolute top-16 right-6 flex flex-col items-center font-bold text-[1.2rem] cursor-pointer mt-2 bg-gradient-to-b from-[#19376D] to-[#19376D]/80 border border-[#19376D] p-4 w-40'>
          <li className='text-white px-3 py-2 hover:text-gray-500' onClick={() => scrollToSection('about')}><button>About</button></li>
          <li className='text-white px-3 py-2 hover:text-gray-500' onClick={() => scrollToSection('skills')}><button>Skills</button></li>
          <li className='text-white px-3 py-2 hover:text-gray-500' onClick={() => scrollToSection('projects')}><button>Projects</button></li>
          <li className='text-white px-3 py-2 hover:text-gray-500' onClick={() => scrollToSection('contact')}><button>Contact</button></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
