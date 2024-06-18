/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4wDsqeVDpa1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-0 z-40 flex transform bg-black bg-opacity-25 transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={closeSidebar}
      >
        <div className="relative flex w-64 max-w-xs flex-1 flex-col bg-[#f4f2fa] focus:outline-none rounded-lg">
          <nav className="mt-6 px-2">
            <div className="space-y-1">
              <a href="#" className="flex items-center rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="ml-3 text-sm font-medium">Dashboard</span>
              </a>
              <a href="#" className="flex items-center rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="ml-3 text-sm font-medium">Profile</span>
              </a>
            </div>
          </nav>
        </div>
        <div className="w-14 flex-shrink-0" aria-hidden="true" />
      </div>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#f4f2fa]">
        <div className="flex flex-col flex-grow pt-5 bg-[#f4f2fa] overflow-y-auto rounded-lg">
          <div className="flex items-center justify-center flex-shrink-0 px-4">
            <img className="h-8 w-auto mr-4" src="/placeholder.png" alt="Life Skills" />
          </div>
          <div className="mt-6 flex flex-col flex-grow px-4">
            <nav className="flex-1 space-y-1">
              <a href="#" className="flex items-center rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="ml-3 text-sm font-medium">Dashboard</span>
              </a>
              <a href="#" className="flex items-center rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="ml-3 text-sm font-medium">Profile</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 md:ml-64 p-6 shadow-lg rounded-lg">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white items-center justify-between">
          <button
            type="button"
            className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className="flex gap-4 ml-auto">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upgrade
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Not Subscribed
            </button>
          </div>
        </div>
        <main className="flex-1">
          <div className="mx-auto flex justify-between">
            {/* <h1 className="text-2xl font-semibold text-gray-900">Create Test</h1> */}
            <div>
             
              <h1 className="text-2xl font-semibold text-gray-900">Create Test</h1>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6 border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-semibold">Test 1</h2>
                  <p className="text-gray-500 mt-2">This is a description of Test 1.</p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-semibold">Test 2</h2>
                  <p className="text-gray-500 mt-2">This is a description of Test 2.</p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-semibold">Test 3</h2>
                  <p className="text-gray-500 mt-2">This is a description of Test 3.</p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-semibold">Test 4</h2>
                  <p className="text-gray-500 mt-2">This is a description of Test 4.</p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-semibold">Test 5</h2>
                  <p className="text-gray-500 mt-2">This is a description of Test 5.</p>
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-semibold">Test 6</h2>
                  <p className="text-gray-500 mt-2">This is a description of Test 6.</p>
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
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}