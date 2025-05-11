import React from 'react';
import axios from 'axios'
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

 const Materialresorses = () => {

  
const [data,Setdata] = useState({
      pop_subjects:[],
      top_subjects:[]
  });
const location = useLocation();
const query = new URLSearchParams(location.search).get('q')
useEffect(() => {
  if (query) {
    axios
      .get(`http://localhost:8000/get-top-pop-search/?q=${query}`)
      .then(response =>
         Setdata(response.data))
      .catch(error => console.error(error));
  }
}, [query]);



  return (
    <div className='w-full lg:h-screen m-h-screen'>

      {/* Heading starts */}
      <h1 className="text-3xl font-bold lg:ml-130 ml-20 lg:mr-20 mr-80 text-black lg:mb-8 mb-4 lg:mt-30 mt-35">Material Resources</h1>
      <div className="lg:ml-140 sm:ml-60 ml-15 lg:mr-30 flex items-center bg-white lg:w-90 w-70 h-10 mt-8 rounded-lg shadow">
        <input
          className="ml-3 flex-grow outline-none text-gray-700"
          type="text"
          placeholder="Search materials..."
        />
        <span className="material-symbols-outlined text-gray-500 cursor-pointer ml-2 mr-2">
          search
        </span>
      </div>
      {/* Heading ends */}

      {/* Resources starts */}
         
         <div className="grid gap-3 lg:mt-15 mt-10 lg:ml-90 sm:ml-30 ml-5"> 
           

           {data.pop_subjects.map((item,index)=>(

            <div key={index} className="border rounded-lg lg:h-20 lg:w-200 w-85 h-25 flex items-center gap-4 ">
               <a href={item.image} download >
              <span className="mt-1 ml-5 material-symbols-outlined">
                article
              </span>
              <div className="ml-5">
                <p className="font-semibold">Solving</p>
                <p className="text-sm text-gray-500 font-bold">{item.image}</p>
              </div>
              </a>
                     
            </div>
                ))}
        
        {data.pop_subjects.map((item,index)=>(

<div key={index} className="border rounded-lg lg:h-20 lg:w-200 w-85 h-25 flex items-center gap-4 ">
   <a href={item.image} download >
  <span className="mt-1 ml-5 material-symbols-outlined">
    article
  </span>
  <div className="ml-5">
    <p className="font-semibold">Solving</p>
    <p className="text-sm text-gray-500 font-bold">{item.image}</p>
  </div>
  </a>
         
</div>
    ))}

    

          <div className="border rounded-lg lg:h-20 lg:w-200 w-85 h-25 flex items-center gap-4">
            <span className="ml-5 material-symbols-outlined">
              subscript
            </span>
            <div className="ml-5">
              <p className="font-semibold">Calculus Practice</p>
              <p className="text-sm text-gray-500 font-bold">Exercise</p>
            </div>
            {/* <button className="ml-auto text-white bg-blue-200 mr-6">Download</button> */}
          </div>
        </div>
  
      {/* Resources ends */}
    </div>
    
  );
};

export default Materialresorses;



























// import React from 'react'
// import { useEffect,useState } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';


// const Materialresorses = () => {

//   const { id } = useParams();  // get subject id from URL

//   const [subject, setSubject] = useState({});
//   useEffect(() => {
//     axios.get(`http://localhost:8000/GetPopularRelatedSubjects/${id}/`)
//       .then(response => setSubject(response.data))
//       .catch(error => console.error(error));
//   }, [id]);

  
//   return (
//   <div>
// {/* navbar starts */}
// <div className='flex justify-between items-center w-full fixed top-0 left-0 z-10 px-6 py-4 border-b bg-white shadow-md'>
//         <ul className='flex space-x-6 items-center'>
//           <li className="hover:bg-green-200 rounded-full cursor-pointer px-5 py-3 flex items-center gap-2 font-bold">
//             <span className="material-symbols-outlined text-black">home</span>
//             <a href="#" className="text-black">All Courses</a>
//           </li>
//           <li className="hover:bg-green-200 rounded-full cursor-pointer px-5 py-3 flex items-center gap-2 font-bold">
//             <span className="material-symbols-outlined text-black">settings</span>
//             <a href="#" className="text-black">Settings</a>
//           </li>
//           <li className="hover:bg-green-200 rounded-full cursor-pointer px-5 py-3 flex items-center gap-2 font-bold">
//             <span className="material-symbols-outlined text-black">person</span>
//             <a href="#" className="text-green-500">Profile</a>
//           </li>
//           <li>
//             <input className='ml-6 px-4 py-2 border border-green-200 rounded-full' type="text" placeholder='Search...' />
//           </li>
//         </ul>
//   </div>
//   {/* navbar ends */}

// {/* Heading starts */}
// <h1 className='lg:ml-115 sm:ml-30 ml-[-1px] font-bold mt-30'>Material Resources</h1>
//       <div className="lg:ml-125 sm:ml-60 ml-30 flex items-center bg-white w-90 h-10 mt-8 rounded-lg shadow ">
//   <input
//     className="ml-3 flex-grow outline-none text-gray-700"
//     type="text"
//     placeholder="Search materials..."
//   />
//   <span className="material-symbols-outlined text-gray-500 cursor-pointer ml-2 mr-2">
//     search
//   </span>
// </div>
// {/* heading ends */}


//   {/* div starts here */}
//   {subject && (
//         <div className='grid gap-3 mt-15 lg:ml-90 sm:ml-30 ml-[-1px]'>

//         {subject?.pdf && (
//             <div className='border rounded-lg h-20 w-200 flex items-center gap-4'>
//               <span className="mt-1 ml-5 material-symbols-outlined">
//                 article
//               </span>
//               <div className='ml-5'>
//                 <p className='font-semibold'>solving</p>
//                 <p className='text-sm text-gray-500 font-bold'>{subject?.pdf} - PDF</p>
//               </div>
//               <button className='ml-auto text-white bg-blue-200 mr-6'>Download</button>
//             </div>
//           )}
          
//           {subject?.videos && (

//             <div className='border rounded-lg h-20 w-200 flex items-center gap-4'>
//             <span className="mt-1 ml-5 material-symbols-outlined">
//               play_circle
//              </span>
//               <div className='ml-5'>
//                 <p className='font-semibold'>problem solving</p>
//                 <p className='text-sm text-gray-500 font-bold'>{subject?.name} - Video</p>
//               </div>
//               <button className='ml-auto text-white bg-blue-200 mr-6'>Download</button>
//             </div>
//           )}

// {subject?.image && ( 
//             <div className='border rounded-lg h-20 w-200 flex items-center gap-4'>
//             <span className="mt-1 ml-5 material-symbols-outlined">
//               calculate
//              </span>
//               <div className='ml-5'>
//                 <p className='font-semibold'>Algebraic Techniques</p>
//                 <p className='text-sm text-gray-500 font-bold'>{subject?.name} - Notes</p>
//               </div>
//               <button className='ml-auto text-white bg-blue-200 mr-6'>Download</button>
//             </div>
// )} 

//             <div className='border rounded-lg h-20 w-200 flex items-center gap-4'>
//             <span className="ml-5 material-symbols-outlined">
//               subscript
//              </span>
//               <div className='ml-5'>
//                 <p className='font-semibold'>Calcus practice</p>
//                 <p className='text-sm text-gray-500 font-bold'>Exercise</p>
//               </div>
//               <button className='ml-auto text-white bg-blue-200 mr-6'>Download</button>
//             </div>
//           {/* ))} */}
//         </div>
//         )}

//         {/* div ends here */}
//   </div>
  
 
    
//   )
// }

// export default Materialresorses