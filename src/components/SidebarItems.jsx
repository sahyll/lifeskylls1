import React from 'react';

const SidebarItems = ({ href, icon, label }) => {
  return (
    <a href={href} className="flex items-center rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100">
      <img src={icon}/>
      <span className="ml-3 text-sm font-medium">{label}</span>
    </a>
  );
};

export default SidebarItems;
