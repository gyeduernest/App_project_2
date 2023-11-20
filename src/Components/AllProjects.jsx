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
      <div className='fixed'>
      <DashNav
        Main="Summary"
        search="Search"
        Saved="Saved Projects"
        Profile="Profile"
        AllProjects="All projects"
        Leave="Log Out"
      />

      </div>

      <div className='mx-auto w-96'>
        <h2>All Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <strong>{project.projectName}</strong>
              <p>Status: {project.status}</p>
              <p>Region: {project.region}</p>
              <p>Sector: {project.sector}</p>
              <p>Funding Required: {project.fundingRequired}</p>
              <p>Current Funding: {project.currentFunding}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllProjects;
