import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


const Analatics = () => {

  
  const [book,setbook] = useState([]);

  useEffect(()=>{
    axios.get('https://workhole.pythonanywhere.com/createlistSubjects').then(response => setbook(response.data)).catch(error => console.error(error));
    
  },[]);
 
  return (

    <div className="min-h-screen bg-gray-100 p-6 lg:mt-[-200px] mt-[-220px] mb-[-40px] shadow-lg">
  <div className=" font-bold text-start text-gray-500 lg:mb-8 mb-8 sm:ml-20 ml-2 lg:ml-50 lg:text-2xl text-2xl">Categories</div>

{/* main divs starts here */}

  {/* <div className="flex flex-wrap justify-center gap-6 "> */}
  <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 lg:gap-2 lg:mr-40 lg:ml-40 ml-2 mr-15 gap-y-4'> 

    <div className="lg:w-64 lg:h-64 w-40 h-60 bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center ">
      <img src="https://img.icons8.com/ios-filled/50/math.png" alt="Math" className="mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">Subjects</h2>
      <Link to="/subjects">
      <button className="text-white bg-blue-300 p-4 mt-10">Explore</button>
      </Link>   
    </div>

   
    <div className="lg:w-64 lg:h-64 w-40 h-60 bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
      <img src="https://img.icons8.com/ios-filled/50/physics.png" alt="Physics" className="mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">Courses</h2>
      <Link to="/course">
      <button className="text-white bg-blue-300 p-4 mt-10">Explore</button>
      </Link>
    </div>

    
    <div className="lg:w-64 lg:h-64 w-40 h-60 bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
    <img src="https://img.icons8.com/ios-filled/100/exam.png" alt="chemistry" className="lg:w-15 w-12 mx-auto lg:mb-2" />


      <h2 className="text-xl font-semibold text-gray-800 lg:mt-1">Exams</h2>
      <Link to="/exams">
      <button className="text-white bg-blue-300 p-4 mt-10">Explore</button>
      </Link>
    </div>


    <div className="lg:w-64 lg:h-64 w-40 h-60 bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center">
      <img src="https://img.icons8.com/ios-filled/50/computer.png" alt="Computer" className="mx-auto mb-4 lg:w-18" />
      <h2 className="text-xl font-semibold text-gray-800 mt-[-15px] lg:mt-[-20px]">Job </h2>
      <Link to="/home">
      <button className="text-white bg-blue-300 p-4 mt-10">Explore</button>
      </Link>
    </div>
  </div>
{/* main divs ends here */}

  <div>
    <p className='font-bold text-gray-500 mt-26 lg:ml-50 ml-3 lg:text-2xl text-2xl'>Featured Materials</p>
  </div>

  {/* feature divs starts here */}
     <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-6 mt-10 mb-20 p-6 lg:ml-40 ml-5 lg:mr-40 md:mr-50 sm:mr-90 mr-30 bg-yellow-50 rounded-2xl shadow'>
       <Link to="/home">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>JavaScript</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
          </Link>

          <Link to="/home">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>Python</h2>
              <p className='text-gray-600'>Explore the wonders of </p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
         </Link>
          
         <Link to="/home">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>.Net</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
          </Link>

          <Link to="/home">
          <div className='bg-white rounded-lg overflow-hidden shadow-md'>
            <img
              className="w-full h-40 object-cover"
              src="https://blog.codewithdan.com/wp-content/uploads/2023/06/Docker-Logo.png"
              alt=""
            />
            <div className='p-4'>
              <h2 className='text-black font-bold'>Docker</h2>
              <p className='text-gray-600'>Explore the wonders of</p>
              <p className='text-gray-500 font-bold'>Rating: N/A</p>
            </div>
          </div>
          </Link>
      </div>
       {/* feature divs ends here */}


</div>  
  )
}

export default Analatics




































// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const Analatics = () => {
//   return (
//     <div className="w-full bg-white py-10 mt-22 px-10">
//       <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//         {/* Left: Carousel Box with Scroll */}
//         <div className="h-[450px] overflow-y-auto border rounded-md p-2">
//           <Carousel>
//             <CarouselContent>
//               <CarouselItem>
//                 <img
//                   className="w-full h-[400px] object-cover rounded-md"
//                   src="https://media.newyorker.com/photos/590952026552fa0be682bfd5/master/pass/Django-unchained-cobb.jpg"
//                   alt="Image 1"
//                 />
//               </CarouselItem>
//               <CarouselItem>
//                 <img
//                   className="w-full h-[400px] object-cover rounded-md"
//                   src="https://cdn.prod.website-files.com/61c02e339c11997e6926e3d9/61c2e48c31c35e3ee6ca0daf_616682ef1068e385b0db66f0_python-django.png"
//                   alt="Image 2"
//                 />
//               </CarouselItem>
//               <CarouselItem>
//                 <img
//                   className="w-full h-[400px] object-cover rounded-md"
//                   src="https://cdn.prod.website-files.com/61c02e339c11997e6926e3d9/61c2e48c31c35e3ee6ca0daf_616682ef1068e385b0db66f0_python-django.png"
//                   alt="Image 3"
//                 />
//               </CarouselItem>
//             </CarouselContent>

//             {/* Buttons */}
//             <CarouselPrevious className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800 text-white z-10" />
//             <CarouselNext className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800 text-white z-10" />
//           </Carousel>
//         </div>

//         {/* Right: Text Section */}
//         <div className="flex flex-col space-y-2">
//           <p className="text-green-500 font-bold text-sm">
//             DATA ANALYTICS DASHBOARD
//           </p>
//           <h1 className="text-black font-bold text-2xl">
//             Manage Data Analytics
//           </h1>
//           <p className="text-sm text-gray-600">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analatics;
