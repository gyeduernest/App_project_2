import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/Img1.jpg'

export default function Home() {
  return (
 <div className=' text-center text-white'>
      <img src={img1} className='image' alt="" />        
      <div className='header'>
      <h1 className='mb-5 text-center mx-auto'>
        Donate to a stalled Government Project Today
      </h1>
      <p className='mb-5'>This platform has a sole purpose of funding Government Projects that have been stalled over the years</p>
        <div className='flex gap-4 items-center justify-center z-50'>
          <button> Get Started</button>
          <Link>Learn More</Link>
         </div>
       </div>

  </div>  
  )
}
