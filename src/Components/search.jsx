import React from 'react'
import DashNav from './DashNav'



export default function FindProject() {
  return (
    <div className='flex'>
      <div>
        
      <DashNav Main="Summary" search="Search" Saved="Saved Projects" Profile="Profile" AllProjects="All projects" Leave="Log Out" /></div>
      <div className='mx-auto p-5 '>
        <div className="flex gap-5">
          <div><input type="search" name="search" id="search" className='search' placeholder='Search Projects' /></div>
          <div>
            <button type='/'>Search</button>
          </div>
        </div>
        
      </div>

    </div>
  )
}
