import React from 'react'
import { Link } from 'react-router-dom'
import img6 from './images/img6.jpg'

export default function Home() {
  return (
 <div className=' text-center text-white'>
      <img src={img6} className='image' alt="" />        
      <div className='header'>
      <h1 className=' text-5xl text-center mx-auto'>
        Donate to a stalled Government Project Today
      </h1>
      <p className=' px-5 mt-5 mb-10'>This platform has a sole purpose of funding Government Projects that have been stalled over the years</p>
        <div className='flex gap-4 items-center justify-center z-50'>
          <Link to="/register"><button className='lg:mt-20 mt-5 md:mt-10 '> Get Started</button></Link>
          <Link to="/register" className='lg:mt-20 mt-5 md:mt-10 border-2 rounded-md px-5 py-1 border-slate-300'>Learn More</Link>
         </div>
       </div>

  </div>  
  )
}
