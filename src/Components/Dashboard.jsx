import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
      <nav className='pt-40 pb-96 p-20 border w-96 h-full'>
          <ul>
          <li className='mb-10'>
          <Link className='hover:bg-slate-100 hover:px-10 hover:py-1 hover:rounded-md'>Main</Link>
          </li>
          <li className='mb-10'>
          <Link className='hover:bg-slate-100 hover:px-5 hover:py-1 hover:rounded-md'>Search</Link>
          </li>
          <li className='mb-10'>
          <Link className='hover:bg-slate-100 hover:px-5 hover:py-1 hover:rounded-md'>Saved Projects</Link>
          </li>
          <li className='mb-10'>
          <Link className='hover:bg-slate-100 hover:px-5 hover:py-1 hover:rounded-md'>Profile</Link>
          </li>        
          </ul>
          <Link>Log out</Link>
      </nav>
    </div>
  )
}
