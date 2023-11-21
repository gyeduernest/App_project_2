import React from 'react'
import { Link } from 'react-router-dom'




export default function DashNav(props) {

  
  return (
    <div className=''>
      <nav className='  pt-40 pb-96 p-10 border w-64 h-full'>
          <ul>
          <li className='mb-10'  >
          <Link to="/summary" className='hover:bg-slate-100 hover:px-10 hover:py-1 hover:rounded-md active:bg-blue-500 active:text-white'>{props.Main}</Link>
          </li>
          <li className='mb-10'>
          <Link to="/allprojects" className='hover:bg-slate-100 hover:px-5 hover:py-1 hover:rounded-md active:bg-blue-500 active:text-white'>{props.AllProjects}</Link>
          </li>
          <li className='mb-10'>
          <Link to="/search" className='hover:bg-slate-100 hover:px-5 hover:py-1 hover:rounded-md active:bg-blue-500 active:text-white'>{props.search}</Link>
          </li>
          <li className='mb-10'>
          <Link to="/favorites" className='hover:bg-slate-100 hover:px-5 hover:py-1 hover:rounded-md active:bg-blue-500 active:text-white'>{props.Saved}</Link>
          </li>
          <li className='mb-10'>
          <Link to="/profiles" className='hover:bg-slate-100 hover:px-5 hover:py-1 hover:rounded-md active:bg-blue-500 active:text-white'>{props.Profile}</Link>
          </li>        
          </ul>
          <button>

          <Link>{props.Leave}</Link>
          </button>
      </nav>
    </div>
  )
}
