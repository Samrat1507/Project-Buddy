import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects/getProject');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const projectsData = await response.json();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col gap-5 h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-row gap-5 h-screen">
        {/* Right Section */}
        <div className="flex flex-col flex-grow bg-lightBlue rounded-xl shadow-2xl shadow-gray-700">
          {/* Options Section */}
          <div className="flex flex-row justify-around my-5">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Recent Projects</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Completed Projects</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Explore Projects</button>
            <Link href="/createproject">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Create a Project</button>
            </Link>
          </div>
          
          {/* Search Section */}
          <div className="flex justify-end mr-5 mb-5">
            <input type="text" placeholder="Search..." className="px-4 py-2 border rounded" />
            <button className="px-4 py-2 bg-blue-500 text-white ml-2 rounded">Search</button>
          </div>
          
          {/* Project List Section */}
          <div className="overflow-y-auto">
            {/* Individual Project Cards */}
            <div className="flex flex-col gap-4 mx-5">
              {/* Mapping through projects to display each project */}
              {projects.map(project => (
                <div key={project._id} className="flex flex-col bg-white p-4 rounded shadow">
                  <h3 className="font-semibold">{project.projectName}</h3>
                  <p className="text-gray-500">{project.description}</p>
                  <p className="text-gray-500">Technologies Used: {project.technologiesUsed}</p>
                  <p className="text-gray-500">Created At: {new Date(project.createdAt).toLocaleString()}</p>
                  {/* You can add more details as needed */}
                  <button className="px-3 py-1 bg-blue-500 text-white rounded mt-2">Project History</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
