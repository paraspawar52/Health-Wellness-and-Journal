import React from 'react'

const Navbar = () => {
  return (
    <>
       <div className="flex items-center justify-between p-4 bg-white shadow-md shadow-custom">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="https://placehold.co/40x40" alt="Logo" className="rounded-full" />
                        </div>
                        <h1 className="ml-4 text-xl sm:text-2xl font-bold text-purple-700">Health & Wellness Journal</h1>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-gray-600 text-sm sm:text-lg mr-4">Dashboard</a>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                            <i className="fas fa-bell text-gray-600 animate-ping " ></i>
                        </div>
                    </div>
                </div>
    
    </>
  )
}

export default Navbar