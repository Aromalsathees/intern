import React from 'react'

const Materialsearch1 = () => {
  return (
    <div className='w-full h-screen'>

{/* 
search bar starts here */}
      <h1 className='lg:ml-140 sm:ml-30 ml-[-1px] font-bold mt-30'>Study Material Hub</h1>
      <div className="lg:ml-150 sm:ml-60 ml-40 flex items-center bg-white w-90 h-10 mt-8 rounded-lg shadow">
  <input
    className="flex-grow outline-none text-gray-700"
    type="text"
    placeholder="   Search by subject, course, or exam"
  />
  <span className="material-symbols-outlined text-gray-500 cursor-pointer ml-2 mr-2">
    search
  </span>
</div>
{/* 
search bar ends here */}


      <h2 className='ml-50 mt-15 font-semibold'>Popular Materials</h2>


{/* Cards start here */}
<div className='grid grid-cols-4 mt-4 ml-50 gap-6 mr-20'>

  <div className='border px-4 py-2 w-70 h-40 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
    <button className='bg-blue-300 mt-4 rounded-lg text-white'>Download</button>
  </div>

  <div className='border px-4 py-2 w-70 h-40 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
    <button className='bg-blue-300 mt-4 rounded-lg text-white'>Download</button>
  </div>

  <div className='border px-4 py-2 w-70 h-40 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
    <button className='bg-blue-300 mt-4 rounded-lg text-white'>Download</button>
  </div>

  <div className='border px-4 py-2 w-70 h-40 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
    <button className='bg-blue-300 mt-4 rounded-lg text-white'>Download</button>
  </div>

</div>
{/* Cards ends here */}


<h2 className='ml-50 mt-15 font-semibold'>Top Rated Materials</h2>


{/* cards 2 starts here */}
<div className='grid grid-cols-3 mt-4 lg:ml-50 gap-6'>

<div className='border px-4 py-2 w-70 h-20 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
  </div>

  
<div className='border px-4 py-2 w-70 h-20 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
  </div>

  
<div className='border px-4 py-2 w-70 h-20 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
  </div>

  
<div className='border px-4 py-2 w-70 h-20 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
  </div>

  
<div className='border px-4 py-2 w-70 h-20 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
  </div>

  
<div className='border px-4 py-2 w-70 h-20 rounded-lg shadow-md'>
    <p className='font-semibold mt-2 '>Linear Algebra Notes</p>
    <p className='text-gray-400 '>Note-2022</p>
  </div>


</div>
{/* card 2 ends here */}


    </div>
  )
}

export default Materialsearch1