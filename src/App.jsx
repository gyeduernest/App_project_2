import { Routes, Route, Outlet } from "react-router"
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
import Register from "./Register"
import Login from "./Login"
import Summary from "./Components/Summary"
import DashNav from "./Components/DashNav"
import AllProjects from "./Components/AllProjects"


function App() {

  return (
    <>

          <Routes>
            



                <Route path="/" element={<LandingPage/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                
            
        
        
             <Route>

                <Route path="/dashboard" element={<Dashboard/>}/>  
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/search" element={<FindProject/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/chatbox" element={<Chatbox/>}/>
                <Route path="/profiles" element={<Profiles/>}/>
                <Route path="/summary" element={<Summary/>}/>
                <Route path="/dashnav" element={<DashNav/>}/>
                <Route path="/allprojects" element={<AllProjects/>}/>

             </Route>
            
            </Routes>        
    

    </>
  )
}

export default App
