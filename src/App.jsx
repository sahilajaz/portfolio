import About from "./Components/About"
import Navbar from "./Components/Navbar"
import ProfileSection from "./Components/ProfileSection"
import ExperiencSection from "./Components/ExperiencSection"
import ProjectSection from "./Components/ProjectSection"

const App = () => {
  

  return (
    <main className="h-full  bg-gradient-to-l from-gray-900/90  to-[#19376D]">
     <Navbar/>
     <ProfileSection/>
     <About/>
     <ExperiencSection/>
     <ProjectSection/>
    </main>
  )
}

export default App
