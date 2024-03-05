import React from 'react';
import { Navbar } from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className='"flex flex-col h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5 gap-16 items-center"'>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-row h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913]">
        {/* Left Section */}
        <div className="flex flex-col items-center w-1/4 py-10">
          {/* Profile Picture */}
          <img src="profile-pic.jpg" alt="Profile" className="w-20 h-20 rounded-full" />
          {/* User Info */}
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">@johndoe</p>
            <p className="text-sm text-gray-500">Description</p>
            <p className="text-sm text-gray-500">Country</p>
            <p className="text-sm text-gray-500">GitHub ID</p>
            <p className="text-sm text-gray-500">LinkedIn ID</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col flex-grow">
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
