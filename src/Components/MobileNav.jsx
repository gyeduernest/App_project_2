import React from 'react'
import { Link } from 'react-router-dom'


export default function MobileNav() {
  return (
    <>
      <nav className='fixed w-full  px-10 py-5 justify-end flex  z-50 gap-10  backdrop-blur-lg text-white  '>
        <button className='bg-slate-900 px-3 py-3 '>
          <div className='w-3 mb-1 border border-white'></div>
          <div className='w-2 mb-1 border border-white'></div>
          <div className='w-3 border border-white'></div>
        </button>
        
     </nav>
     
    </>
  )
}
