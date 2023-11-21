import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashNav from './DashNav';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3005/stalledProjects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='flex'>
      <div className='fixed hidden lg:block'>
      <DashNav
        Main="Admin Board"
        search="Search"
        Saved="Saved Projects"
        Profile="Profile"
        AllProjects="All projects"
        Leave="Log Out"
      />

      </div>

      <div className=' mx-auto'>
        <div className='text-center p-5'>
        <h2 className=''>All Projects</h2>
        </div>
        
        
          <div className='flex flex-wrap lg:px-80 lg:gap-10 lg:ml-20'>
          {projects.map(project => (
            <div key={project.id} className='border border-gray-300 p-4 rounded-md mb-4' >
              <div className=''>
              <img src={project.image} alt="" className='w-56 h-40 rounded-md' />
              <h5 className='font-bold'>{project.projectName}</h5>
              <p>Region: {project.region}</p>
              <p>Sector: {project.sector}</p>
              <p>Funding Required: {project.fundingRequired}</p>
              <p>Current Funding: {project.currentFunding}</p>
              <div className='px-5 items-center justify-center'>
              <button className='fund'>Fund Project</button>
              <button className='save'>Save</button>
              </div>
              </div>
            </div>
          ))}
          </div>


        </div>
    </div>
  );
};

export default AllProjects;
