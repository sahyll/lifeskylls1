import React from 'react';

const Profile = ({ name, progress, imageUrl }) => {
  const progressStyle = progress > 100 ? { width: `calc(100% + 1rem)` } : { width: `${progress}%` };

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 bg-[#f4f2fa] rounded-lg">
      <div className="w-30 h-30 overflow-hidden rounded-full bg-gray-200">
        {imageUrl && <img className="w-full h-full object-cover" src={imageUrl} alt={name} />}
      </div>
      <h5 className="mt-4 text-xl font-medium text-gray-900">{name}</h5>
      <h6 className='font-medium text-sm mt-2'>Complete your Profile</h6>
      <div className="mt-2 w-full h-2 bg-gray-200 rounded-full">
        <div style={progressStyle} className="h-full bg-purple-500 rounded-full"></div>
      </div>
      <div className="mt-1 text-xs text-semibold font-medium text-gray-500">{progress}%</div>
    </div>
  );
};

export default Profile;
