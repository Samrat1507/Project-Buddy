import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from './components/Navbar';

const CreateProject = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    technologiesUsed: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/projects/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Project created successfully
        console.log('Project created successfully');
        // Redirect to dashboard
        router.push('/protected/dashboard');
      } else {
        // Handle error
        console.error('Failed to create project');
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className="flex flex-col gap-5 h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center bg-lightBlue rounded-xl shadow-2xl shadow-gray-700 p-10">
          <h1 className="text-4xl font-semibold mb-5">Create a Project</h1>
          {/* Project Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            {/* Project Name */}
            <input
              type="text"
              name="projectName"
              placeholder="Project Name"
              value={formData.projectName}
              onChange={handleChange}
              className="bg-white px-4 py-2 rounded-md shadow-sm"
            />
            {/* Project Description */}
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="bg-white px-4 py-2 rounded-md shadow-sm"
            ></textarea>
            {/* Technologies Used */}
            <input
              type="text"
              name="technologiesUsed"
              placeholder="Technologies Used"
              value={formData.technologiesUsed}
              onChange={handleChange}
              className="bg-white px-4 py-2 rounded-md shadow-sm"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-8 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors"
            >
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
