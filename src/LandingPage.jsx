import React from 'react'
import DesktopNav from './Components/DesktopNav'
import Home from './Home'
import About from './About'
import BoardMembers from './BoardMembers'
import Setup from './Installation'
import MobileNav from './Components/MobileNav'



export default function LandingPage() {
  return (
    <div>
      <div className='  lg:block hidden'>
      <DesktopNav/>
      </div>
      <div className=' lg:hidden md:block '>
        <MobileNav/>
      </div>
      <Home/>
      <About/>
      <BoardMembers/>
      <Setup/>
     </div>
  )
}
