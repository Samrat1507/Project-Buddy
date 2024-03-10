import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    username: '',
    description: '',
    country: '',
    githubId: '',
    linkedInId: ''
  });

  useEffect(() => {
    // Fetch user details from getUser API
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/mongodb/getUser');
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const userData = await response.json();

        // Assuming the data structure is an object with properties like username, description, etc.
        setUserData(userData);

      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array to execute the effect only once when the component mounts

  return (
    <div className="flex flex-col gap-5 h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-row gap-5 h-screen ">
        {/* Left Section */}
        <div className="flex flex-col items-center  w-1/4 py-10 bg-lightBlue rounded-xl shadow-2xl shadow-gray-700">
          {/* Profile Picture */}
          <img src="/profilePic.jpg" alt="Profile" className="w-20 h-20 rounded-md border-x-black"/>
          {/* User Info */}
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">{userData.username}</h2>
            <p className="text-sm text-gray-500">@{userData.username}</p>
            <p className="text-sm text-gray-500">{userData.description}</p>
            <p className="text-sm text-gray-500">{userData.country}</p>
            <p className="text-sm text-gray-500">{userData.githubId}</p>
            <p className="text-sm text-gray-500">{userData.linkedInId}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col flex-grow bg-lightBlue rounded-xl shadow-2xl shadow-gray-700">
          {/* Options Section */}
          <div className="flex flex-row justify-around my-5">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Recent Projects</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Ongoing Projects</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Completed Projects</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Explore Projects</button>
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
              {/* Example Project Card */}
              <div className="flex justify-between items-center bg-white p-4 rounded shadow">
                <div>
                  <h3 className="font-semibold">Project Name</h3>
                  <p className="text-gray-500">Technologies Used</p>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">Project History</button>
              </div>
              {/* Repeat this block for each project */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
