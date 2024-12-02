import React from 'react'

function Footer() {
  return (
    <div>
            <div className="flex justify-between items-center p-8 bg-white">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <p className="text-gray-700">Email: dhananjaymonga@gmail.com</p>
                        <p className="text-gray-700">Phone: 917400377777</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-facebook fa-lg">

                                
                            </i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-twitter fa-lg"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-github fa-lg"></i>
                        </a>
                    </div>
                </div>
    </div>
  )
}

export default Footer