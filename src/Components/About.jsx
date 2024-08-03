import React from 'react'

const About = () => {
  return (
     <section className='py-4'>
     <div className='bg-[#0C0C0C]  sm:none lg:flex   absolute lg:right-36 lg:left-36 md:right-3  md:left-16 justify-between px-16 rounded-3xl  z-10 shadow-gray-700 xl:w-[1000px] md:w[400px]'>
       <div className='py-5 px-5'>
        <h1 className='text-white mb-11 ms-16 text-2xl font-semibold'>ABOUT</h1>
        <img src="/2.png" alt="about-pic"  className='w-[250px] h-[250x] rounded-full'/>
       </div>
       <div>
         <div className="about-section mt-9 me-5 py-4">
          <div className='bg-gradient-to-r from-white/20 to-gray-900 py-2 px-4 rounded-xl'>
            <h1 className='text-white sm:ms-9'>Frontend Developer</h1>
             <div className='flex justify-center align-center'>
              <span><img src='/3.png' className='w-[25px] h-[25px] sm:flex hidden '/></span>
              <p className='text-white ms-4'>I’m a front-end developer  with experience 
               in building responsive and optimized sites</p>
             </div>
          </div>

          <div className='bg-gradient-to-r from-white/20 to-gray-900 py-2 px-4 rounded-xl mt-16'>
            <h1 className='text-white sm:ms-16'>Backend Developer</h1>
             <div className='flex justify-center align-center'>
              <span><img src='/4.png' className='w-[25px] h-[25px]  sm:flex hidden'/></span>
              <p className='text-white ms-4'>I have experience developing fast and
              optimised back-end systems and APIs</p>
             </div>
          </div>
         </div>
      </div>
     </div>
     </section>
  )
}

export default About
