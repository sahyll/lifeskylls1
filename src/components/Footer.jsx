import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#f4f2fa] border-t border-gray-300">
    <div className="text-gray-600">
        &copy; 2024 Somotus
      </div>
      <div className="flex space-x-4">
        <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy and Policy</a>
        <a href="/terms-conditions" className="text-blue-600 hover:underline">Terms and Conditions</a>
        <a href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</a>
      </div>
      
    </div>
  );
};

export default Footer;
