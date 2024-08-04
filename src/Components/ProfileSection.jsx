import React from 'react';
import { saveAs } from 'file-saver';

const ProfileSection = () => {

    const ProfileSection = () => {
        fetch("/resume.pdf")
        .then(res => res.blob())
        .then(blob => {
            saveAs(blob , "resume.pdf")
        })
    }

    const handleHireBtn = () => {
      const el = document.getElementById("contact")
       el.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <section className='py-5 mt-20 w-full px-2'>
      <div className='text-white flex sm:flex-row flex-col justify-center items-center px-11 mt-4'>
        <div className='flex-1 max-w-lg'>
        <div className='lg:hidden flex flex-1  justify-center mb-10'>
          <img src="/1.png" alt="pic" className='h-[250px] w-[250px] rounded-full object-cover' />
        </div>
          <h1 className='text-5xl'>Hi, I'm Sahil</h1>
          <p className='mt-10 text-justify leading-7 font-semibold'>
            I'm a full-stack developer with expertise in React, Next.js, CSS, and Spring Boot etc. 
            I build dynamic and responsive web applications, focusing on clean and efficient code. 
            Dive into my portfolio to discover my approach to creating seamless digital experiences.
          </p>
          <div className='mt-5'>
            <button className='bg-[#576CBC] px-10 py-2 rounded-xl text-white font-extralight text-[1.3rem] hover:bg-blue-400 border-none outline-none 
            mr-4 ' onClick={handleHireBtn}>
              Hire me
            </button>
            <button className='bg-[#576CBC] px-10 py-2 rounded-xl text-white font-extralight text-[1.3rem] 
            hover:bg-blue-400 border-none outline-none sm:mt-0 mt-4' onClick={ProfileSection}>
              Download CV
            </button>
          </div>
        </div>
        <div className='hidden flex-1 lg:flex justify-center mt-19'>
          <img src="/1.png" alt="pic" className='h-[400px] w-[400px] rounded-full object-cover' />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
