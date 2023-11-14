import { Routes, Route } from "react-router"
import FindProject from "./Components/search"
import Projects from "./Components/Projects"
import Favorites from "./Components/SavedProjects"
import Chatbox from "./Components/messages"
import Profiles from "./Components/Profile"
import LandingPage from "./LandingPage"
import Dashboard from "./Components/Dashboard"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"



function App() {

  return (
    <>
          <Routes>
            //Routes for the LandingPage


            <Route path="/" element={<LandingPage/>}>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
        
        
              //Routes for the dashboard
            <Route path="/dashboard" element={<Dashboard/>}/>  
              <Route path="/favorites" element={<Favorites/>}/>
              <Route path="/search" element={<FindProject/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/chatbox" element={<Chatbox/>}/>
              <Route path="/profiles" element={<Profiles/>}/>
            <Route/>

          </Routes>
    

    </>
  )
}

export default App
