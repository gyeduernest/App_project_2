import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'



export default function DesktopNav() {
  return (
  <>
     <nav className='fixed w-full  p-10  z-50 gap-10 flex justify-center backdrop-blur-lg text-white  '>
        <Link to="/home" className='Link-items'>Home</Link>
        <Link to="/about" className='Link-items'>About us</Link>
        <Link to="/contact"  className='Link-items'>Contact us</Link>
        <Link to="/" className='Link-items'><button className='Donate'>Donate Now</button></Link>

        
     </nav>
      
   </>
  )
}
