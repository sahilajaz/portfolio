import About from "./Components/About"
import Navbar from "./Components/Navbar"
import ProfileSection from "./Components/ProfileSection"

const App = () => {
  

  return (
    <main className=" md:h-[1200px] h-[1200px] bg-gradient-to-l from-gray-900 to-[#19376D]">
     <Navbar/>
     <ProfileSection/>
     <About/>
    </main>
  )
}

export default App
