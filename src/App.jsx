//Organisms Imports
import MainContent from './organisms/MainContent'
import AboutMe from './organisms/AboutMe'
import NavBar from './organisms/NavBar'
import Services from './organisms/Services'
import Habilities from './organisms/Habilities'
import Education from './organisms/Education'
import Experiences from './organisms/Experiences'
import Projects from './organisms/Projects'
import Back from './atoms/Back'

function App() {
  return (
    <>
    <NavBar/>
    <div className="w-full">
      <MainContent/>
      <AboutMe/>
      <Services/>
      <Habilities/>
      <Education/>
      <Experiences/>
      <Projects/>
      <Back/>
    </div>
    </>
  )
}

export default App
