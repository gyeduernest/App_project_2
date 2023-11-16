import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'



export default function DesktopNav() {
  return (
  <>
     <nav className='fixed w-full  py-5  z-50 gap-10 flex justify-center bg-white  text-slate-800 font-bold items-center   '>
        <Link to="/home" className='Link-items'>Home</Link>
        <Link to="/about" className='Link-items'>About us</Link>
        <Link to="/contact"  className='Link-items'>Contact us</Link>
        <div className='gap-10 flex pl-40'>
        <Link to="/" className='px-5 py-2 border-2 border-pink-600 rounded-md font-semibold text-slate-900
      focus:ring-4 focus:ring-white-100'>Log in</Link>
        <Link to="/" className=''><button className='px-5 py-2 bg-blue-800 rounded-md font-semibold
     text-white focus:ring-4 focus:ring-white-100
'>Donate Now</button></Link>
        </div>

        
     </nav>
      
   </>
  )
}
