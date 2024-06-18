import React from 'react';
import SidebarComponent from './SidebarComponent';
import Profile from './Profile';


const SidebarLg = () => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#f4f2fa]">
      <div className="flex flex-col flex-grow pt-5 bg-[#f4f2fa] rounded-lg">
        <div className="flex items-center ml-5 justify-center flex-shrink-0 px-4">
          <img className="h-10 w-auto mr-4" src="/placeholder.png" alt="Life Skills" />
        </div>
        <Profile name="Nikhil Gupta" progress={60} imageUrl="/Profile.png" />
        {/* <Test /> */}
      </div>
      <div className="border-t mb-5 border-gray-300"></div>
      <SidebarComponent />
    </div>
  );
};

export default SidebarLg;
