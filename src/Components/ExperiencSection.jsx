import React from 'react';

const logoArray = [
  {
    id: 1,
    name: 'html',
    path: '/html.jpeg'
  },
  {
    id: 2,
    name: 'css',
    path: '/css.jpeg'
  },
  {
    id: 3,
    name: 'js',
    path: '/js.jpeg'
  },
  {
    id: 4,
    name: 'react',
    path: '/rect.jpeg'
  },
  {
    id: 5,
    name: 'tailwind',
    path: '/railwind.jpeg' 
  },
  {
    id: 6,
    name: 'nextJs',
    path: '/nextjs.jpeg'
  },
  {
    id: 7,
    name: 'java',
    path: '/java.jpeg'
  },
  {
    id: 8,
    name: 'spring',
    path: '/spring2.jpeg'
  },
  {
    id: 9,
    name: 'spring boot',
    path: '/boot.jpeg'
  },
  {
    id: 10,
    name: 'git',
    path: '/git.jpeg'
  },
  {
    id: 11,
    name: 'mysql',
    path: '/sql.jpeg'
  },
  {
    id: 12,
    name: 'git hub',
    path: '/hub.jpeg'
  },
  {
    id: 13,
    name: 'kubernates',
    path: '/kub.jpg'
  },
  {
    id: 14,
    name: 'docker',
    path: '/dock.png'
  }
];

const ExperienceSection = () => {
  return (
    <section className='lg:mt-96 lg:py-20' id='skills'>
      <div className='mt-10 px-4 sm:px-6 md:px-12 lg:px-44'>
        <h1 className='text-white text-center mb-10 font-extrabold text-3xl'>Skills</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3  gap-4 md:gap-8 lg:gap-16 justify-items-center cursor-pointer'>
          {
            logoArray.map((item) => (
              <div key={item.id} className='flex flex-col items-center hover:animate-bounce'>
                <div className='w-[110px] h-[110px] rounded-full bg-[#19376D]/95 relative outline-none flex items-center justify-center'>
                  <img src={item.path} alt={item.name} className='w-[50px] h-[50px]' />
                </div>
                <p className='text-white mt-2 capitalize font-bold'>{item.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
