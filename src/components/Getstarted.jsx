import React from 'react';
import { ReactTyped } from 'react-typed';

const Getstarted = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      <h1 className="text-gray-500 text-sm font-bold mb-2">WELCOME</h1>

      <h2 className="font-bold text-gray-600 text-xl sm:text-2xl mb-2 text-center">
        Study Material Hub
      </h2>

      <ReactTyped
        className="text-blue-400 font-bold text-md sm:text-lg mb-4"
        strings={['Access', 'Learn', 'Succeed']}
        typeSpeed={120}
        backSpeed={140}
        loop
      />

      <p className="text-gray-600 text-center text-sm sm:text-base font-semibold">
        Access, Learn, Succeed
      </p>
    </div>
  );
};

export default Getstarted;




// import React from 'react'
// import { ReactTyped } from 'react-typed';


// const Getstarted = () => {

//   return (
//     <div className='flex flex-col justify-center items-center bg-white h-200'>
//       <h1 className='text-gray-500 text-sm font-bold lg:mt-[-180px] mt-[-210px] sm:text-sm mr-50 lg:ml-50 ml-25 '>WELCOME</h1>
//       <h2 className='font-bold text-gray-400 lg:text-2xl text-sm lg:ml-15 lg:mr-12 mr-27'>Study Material Hub</h2>
//       <ReactTyped className='text-blue-200 font-bold lg:ml-25 mr-23'
//   strings={['Access','Learn','Succeed']}
//   typeSpeed={120}
//   backSpeed={140}
//   loop
// />

//       <p className=' text-gray-600 text-center mt-2 font-bold mr-23 lg:ml-25  '>Access,Learn,Succed</p>
//       <div>
//       </div>

//       </div>
//   )
// }

// export default Getstarted
