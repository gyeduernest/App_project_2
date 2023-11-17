import React from 'react'
import DashNav from './DashNav'
export default function Summary() {
  return (
    <>
      <div className='flex'>
        <div>
        <DashNav Main="Summary" search="Search" Saved="Saved Projects" Profile="Profile" AllProjects="All projects" Leave="Log Out" />
        </div>
        <div className=' grid-cols-5 gap-10 justify-center mx-auto py-40 '>
          <div className="rounded-md border-2  border-slate-400 w-96 h-40"></div>
          <div className="rounded-md border-2 border-slate-400 w-40 h-40"></div>
          <div className="rounded-md border-2 border-slate-400 w-40 h-40"></div>
          <div className="rounded-md border-2 border-slate-400 w-40 h-40"></div>
          <div className="rounded-md border-2 border-slate-400 w-40 h-40"></div>
        </div>
      </div>
    </>
  )
}
