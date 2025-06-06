import React from 'react'
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-blue-50 px-16 py-7 mt-10'>
        <div className='max-w-[1250px] mx-auto grid grid-cols-4 lg:gap-20 gap-5 lg:ml-20 ml-[-30px] lg:mr-20 mr-30 '>
            <div className='flex flex-col'>
                <h1 className='text-blue-300 font-bold lg:mt-[-20px] lg:text-md text-sm'>Study Hub.</h1>
                <p className='text-gray-600 text-sm mt-10 font-bold '>
                    Lorem Ipsum is simply dummy text of the 
                </p>
               
            </div>
            <div className='text-gray-600 flex flex-col font-bold text-sm lg:space-y-3 lg:mt-12 mt-40 space-y-5 ml-10 '>
                <p>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-blue-300 hover:text-blue-600 text-2xl" />
                              </a>
                </p>
                <p>Analatics</p>
                <p>Marketing</p>
                <p>Commerse</p>
            </div>
            <div className='text-gray-600 flex flex-col font-bold text-sm lg:space-y-3 lg:mt-12 mt-40 space-y-5 ml-20'>
                <p>
                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-blue-300 hover:text-pink-500 text-2xl" />
                              </a>
                </p>
                <p>pricing</p>
                <p>Documen</p>
                <p>Guides</p>
            </div>
            <div className='text-gray-600 font-bold flex flex-col text-sm lg:space-y-3 lg:mt-12 mt-40 space-y-5 ml-30'>
                <p>
                     <a href="mailto:example@gmail.com">
                                <FaEnvelope className="text-blue-300 hover:text-red-500 text-2xl" />
                              </a>
                </p>
                <p>Pricing</p>
                <p>About</p>
                <p>Jobs</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

