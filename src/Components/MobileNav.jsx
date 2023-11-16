import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () =>  {

    setIsOpen((isOpen)  =>  !isOpen)
  }


  return (
    <>
      <nav className='fixed w-full   px-10 py-5 justify-end z-50  gap-10  backdrop-blur-sm  text-white  '>
        <button onClick={openMenu} className='bg-slate-900 px-3 py-3  border border-white'>
          <div className='w-3 mb-1 border border-white'></div>
          <div className='w-2 mb-1 border border-white'></div>
          <div className='w-3 border border-white'></div>
        </button>  

     {isOpen && (

      <div className=' text-center  backdrop-blur-sm h-full w-full'>


                     <ul className="">
                     <li>
                       <Link to="/" className="text-white">
                         Home
                       </Link>
                     </li>
                     <li>
                       <Link to="/about" className="text-white">
                         About
                       </Link>
                     </li>
                     <li>
                       <Link to="/contact" className="text-white">
                         Contact
                       </Link>
                     </li>
                   </ul>   
       
       
       
      </div>
       
       )}


       </nav>
     
    </>
  );
}
