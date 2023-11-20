import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashNav from './DashNav';

const FindProject = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

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

  useEffect(() => {
    const filtered = projects.filter(project =>
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProjects(filtered);
  }, [searchTerm, projects]);

  const handleSearch = () => {
    console.log('Performing search for:', searchTerm);
  };

  return (
    <div className='flex'>
      <div className='fixed'>
        <DashNav
          Main="Admin Board"
          search="Search"
          Saved="Saved Projects"
          Profile="Profile"
          AllProjects="All projects"
          Leave="Log Out"
        />
      </div>
      <div className='mx-auto p-5 '>
        <div className="flex gap-5">
          <div>
            <input
              type="search"
              name="search"
              id="search"
              className='search'
              placeholder='Search Projects'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <button type="button" onClick={handleSearch} className='button' >
              Search
            </button>
          </div>
        </div>

        {filteredProjects.map(project => (
          <div key={project.id} className="border border-gray-300 p-4 rounded-md mb-4">
            <strong className="block mb-2 text-lg">{project.projectName}</strong>
            <p>Status: {project.status}</p>
            <p>Region: {project.region}</p>
            <p>Sector: {project.sector}</p>
            <p>Funding Required: {project.fundingRequired}</p>
            <p>Current Funding: {project.currentFunding}</p>
            <button>Fund Project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindProject;
