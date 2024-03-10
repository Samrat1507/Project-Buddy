import React, { useState } from 'react';
import Link from 'next/link';
import Switcher from '../components/Switcher';
import { Navbar } from '../components/Navbar';

const Details = () => {
  const [formData, setFormData] = useState({
    username: '',
    description: '',
    location: '',
    github: '',
    linkedIn: ''
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
      // Send user details to backend for saving to MongoDB
      const response = await fetch('http://localhost:3000/api/mongodb/putUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Redirect to dashboard on successful submission
        window.location.href = '/protected/dashboard';
      } else {
        console.error('Error saving user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5 gap-16 items-center">
      <Navbar />
      <div className="bg-otherBlue rounded-xl p-10 w-1/2">
        <h1 className="text-4xl mb-5 text-center dark:text-otherWhite">User Details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="bg-lightBlue placeholder-black/60 px-5 py-2 rounded-md"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="bg-lightBlue placeholder-black/60 px-5 py-2 rounded-md"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="bg-lightBlue placeholder-black/60 px-5 py-2 rounded-md"
          />
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="GitHub ID"
            className="bg-lightBlue placeholder-black/60 px-5 py-2 rounded-md"
          />
          <input
            type="text"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
            placeholder="LinkedIn ID"
            className="bg-lightBlue placeholder-black/60 px-5 py-2 rounded-md"
          />
          <button type="submit" className="bg-blue/80 text-white px-8 py-2 rounded-md shadow-md">
            Submit
          </button>
        </form>
      </div>
      <div className="absolute bottom-5 right-5">
        <Switcher />
      </div>
    </div>
  );
};

export default Details;
