import React from 'react'

const TestCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
    <div className="bg-gray-100 px-4 py-3">
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        View Test
      </a>
    </div>
  </div>
  )
}

export default TestCard