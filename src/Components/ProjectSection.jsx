import React from 'react';

const projectArray = [
  {
    id: 1,
    name: "sticky notes",
    pic: "/sticky.png",
    demo: "https://notessticky12.netlify.app/",
    code: "https://github.com/sahilajaz/stickyNotes",
    description: "A fullstack notes application using react and appwrite."
  },
  {
    id: 2,
    name: "tic tac toe",
    pic: "/tic tac.png",
    demo: "https://sahilajaz.github.io/tic-tac-toe-game/",
    code: "https://github.com/sahilajaz/tic-tac-toe-game",
    description: "A tic-tac-toe game using Html, Css, and JS."
  },
  {
    id: 3,
    name: "Hamlet-Dubai",
    pic: "/ham.png",
    demo: "https://hamletdubai.com/",
    code: "https://github.com/abhaywani114/hamletdubai",
    description: "A multi page website using react and tailwind CSS."
  }
];

const ProjectSection = () => {
  return (
    <section className='py-10' id='projects'>
      <h1 className='text-white text-center text-3xl font-bold mb-6'>Projects</h1>
      <div className="project-card grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-6 px-8">
        {
          projectArray.map((item) => (
            <div className='flex flex-col justify-center w-[400px] items-center gap-5 bg-gradient-to-b from-[#576CBC]/80 to-[#132A53]/90 py-7' key={item.id}>
              <img src={item.pic} alt={item.name} className="w-[298px] h-[200px] border rounded-lg" />
              <p className='text-white font-thin  px-16 text-justify'>{item.description}</p>
              <div className="btn-card flex gap-4 mt-5">
                <a href={item.demo} target="_blank">
                  <button className='bg-[#576CBC] text-white px-6 py-2 text-[1.3rem] rounded-3xl hover:bg-blue-400'>Demo</button>
                </a>
                <a href={item.code} target="_blank" >
                  <button className='bg-[#576CBC] text-white px-6 py-2 text-[1.3rem] rounded-3xl hover:bg-blue-400'>Code</button>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default ProjectSection;
