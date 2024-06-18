import React from 'react'

const Header = ({ toggleSidebar }) => {
  return (
    <div className="sticky top-3 z-10 flex h-20 flex-shrink-0 bg-white items-center justify-between">
    <button
      type="button"
      className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      onClick={toggleSidebar}
    >
      <span className="sr-only">Open sidebar</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <div className="flex gap-4 ml-auto">
    <button
        type="button"
        className="shadow-md inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-t-full rounded-b-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Not Subscribed
      </button>
      <div className='pr-10 gap-4'>
      <button
        type="button"
        className="shadow-md inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-t-full rounded-b-full text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Upgrade
      </button>

      
      </div>
    </div>
  </div>
  )
}

export default Header