import React from 'react'
import TestCard from './TestCard'

const MainContent = () => {
  return (
    <main className="flex-1 ml-2 mt-10 pr-4 bg-slate-50 rounded-xl">
    <div className="mx-auto flex justify-between">
      <div className='flex-col'>
        <h1 className="text-4xl ml-4 font-semibold text-gray-900">Create Test</h1>
        <h3 className='ml-5 font-semibold mt-4 text-purple-600'>Accounts/ Assessments</h3>
      </div>
      
    </div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6 border-2 border-purple-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <TestCard title="Test 1" description="This is a description of Test 1." />
        <TestCard title="Test 2" description="This is a description of Test 2." />
        <TestCard title="Test 3" description="This is a description of Test 3." />
        <TestCard title="Test 4" description="This is a description of Test 4." />
        <TestCard title="Test 5" description="This is a description of Test 5." />
        <TestCard title="Test 6" description="This is a description of Test 6." />
      </div>
    </div>
  </main>
  )
}

export default MainContent