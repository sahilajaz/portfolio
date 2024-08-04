import About from "./Components/About"
import Navbar from "./Components/Navbar"
import ProfileSection from "./Components/ProfileSection"
import ExperiencSection from "./Components/ExperiencSection"

const App = () => {
  

  return (
    <main className="h-full  bg-gradient-to-l from-gray-900 to-[#19376D]">
     <Navbar/>
     <ProfileSection/>
     <About/>
     <ExperiencSection/>
    </main>
  )
}

export default App
