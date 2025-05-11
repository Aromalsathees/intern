// import React from 'react'
// import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'



// const Footer = () => {
//   return (
//     <div className='w-full bg-blue-50 px-16 py-7 mt-10'>
//         <div className='max-w-[1250px] mx-auto grid grid-cols-4 lg:gap-20 gap-5 lg:ml-20 ml-[-30px] lg:mr-20 mr-15 '>
//             <div className='flex flex-col'>
//                 <div className='text-blue-300 font-bold lg:mt-10 mt-28 lg:text-md lg:text-6xl  text-2xl'>Study Hub.</div>
               
              
//                 <div className='mt-4'>
                    
//           </div>
               
//             </div>
          
//             <div className='text-gray-600 font-bold  flex flex-col text-sm lg:space-y-3 lg:mt-12 mt-30 space-y-5'>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                <FaFacebook className="text-blue-300 hover:text-blue-600 text-xl md:text-2xl" />
//             </a>
//                 <p>Solutions</p>
//                 <p>Analatics</p>
//                 <p>Marketing</p>
//                 <p>Commerse</p>
                
//             </div>
//             <div className='text-gray-600 font-bold  flex flex-col text-sm lg:space-y-3 lg:mt-12 mt-30 space-y-5'>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                <FaInstagram className="text-blue-300 hover:text-pink-500 text-xl md:text-2xl" />
//             </a>
//                 <p>support</p>
//                 <p>pricing</p>
//                 <p>Documen</p>
//                 <p>Guides</p>
//             </div>
//             <div className='text-gray-600 font-bold  flex flex-col text-sm lg:space-y-3 lg:mt-12 mt-30 space-y-5'>
//             <a href="mailto:example@gmail.com">
//                <FaEnvelope className="text-blue-300 hover:text-red-500 text-xl md:text-2xl" />
//              </a>
//                 <p>Company</p>
//                 <p>Pricing</p>
//                 <p>About</p>
//                 <p>Jobs</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-blue-50 px-4 py-7 mt-10'>
      
      {/* Desktop / Laptop View */}
      <div className='hidden md:grid max-w-6xl mx-auto grid-cols-4 gap-8'>
        <div className='flex flex-col'>
          <div className='text-blue-300 font-bold text-3xl'>Study Hub.</div>
        </div>

        <div className='text-gray-600 font-bold flex flex-col text-sm space-y-3'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-300 hover:text-blue-600 text-2xl" />
          </a>
          <p>Solutions</p>
          <p>Analytics</p>
          <p>Marketing</p>
          <p>Commerce</p>
        </div>

        <div className='text-gray-600 font-bold flex flex-col text-sm space-y-3'>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-300 hover:text-pink-500 text-2xl" />
          </a>
          <p>Support</p>
          <p>Pricing</p>
          <p>Documentation</p>
          <p>Guides</p>
        </div>

        <div className='text-gray-600 font-bold flex flex-col text-sm space-y-3'>
          <a href="mailto:example@gmail.com">
            <FaEnvelope className="text-blue-300 hover:text-red-500 text-2xl" />
          </a>
          <p>Company</p>
          <p>Pricing</p>
          <p>About</p>
          <p>Jobs</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden flex flex-col items-center space-y-10 mt-10'>
        <div className='text-blue-300 font-bold text-3xl'>Study Hub.</div>

        <div className='flex space-x-6'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-300 hover:text-blue-600 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-300 hover:text-pink-500 text-2xl" />
          </a>
          <a href="mailto:example@gmail.com">
            <FaEnvelope className="text-blue-300 hover:text-red-500 text-2xl" />
          </a>
        </div>

        <div className='grid grid-cols-3 gap-6 text-center text-sm text-gray-600 font-bold'>
          <div className='space-y-1'>
            <p>Solutions</p>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
          </div>
          <div className='space-y-1'>
            <p>Support</p>
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Guides</p>
          </div>
          <div className='space-y-1'>
            <p>Company</p>
            <p>Pricing</p>
            <p>About</p>
            <p>Jobs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer