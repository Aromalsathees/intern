import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Materialresorses from '../components/Materialresorses'


const Minorexam = () => {

    const [query,setQuery] = useState('');
    const navigate = useNavigate();
    const handlsearch = () =>{
      navigate(`/allsearch?q=${query}`);
    }


    const { id } = useParams();
      console.log("Id from url:",id)

    const [popular,setpopular] = useState([])
    const [related,setrelated] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/GetPopularRelatedExams/${id}`).then(response=>{
          console.log(response.data)
            setpopular(response.data.popular_serializer);
            setrelated(response.data.related_serializer);
        }).catch(error=> console.error(error));
    },[id]);

  return (
    <div className='w-full lg:h-screen m-h-screen'>

{/* 
search bar starts here */}
      {/* <h1 className='lg:ml-140  sm:ml-30 ml-[-1px] font-bold mt-30'>Study Material Hub</h1> */}
      <h1 className="text-3xl font-bold lg:ml-150 ml-10 text-black lg:mb-8 mb-4 lg:mt-30 mt-30">Material Hub</h1>
      <div className="lg:ml-150 sm:ml-60 ml-17 flex items-center bg-white lg:w-90 w-70 h-10 mt-8 rounded-lg shadow">
      <input className="flex-grow outline-none text-gray-700" type="text"
        placeholder="   Search by subject, course, or exam" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
        <button onClick={handlsearch}>
           <span className="material-symbols-outlined text-gray-500 cursor-pointer ml-2 mr-2">
             search
           </span>
        </button>
       </div>
{/* 
search bar ends here */}


      <h2 className='lg:ml-50 ml-35 lg:mt-15 mt-5 font-semibold'>Popular Materials</h2>

{/* 
{/* Cards start here */}

 <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-4 mt-8 lg:ml-50 ml-10 gap-6 lg:mr-20 mr-10  '>
 {popular.map((card,index)=>(
     <div key={index} className='border px-4 py-2 lg:w-70 lg:h-40 rounded-lg shadow-md'>
    <p className='font-semibold lg:mt-2 mt-4 '>{card.name}</p>
     <p className='text-gray-400 '>Note-2022</p>
     <Link to={`/materialexams/${card.id}?model=popular`}>
    <button className='bg-blue-300 lg:mt-4 mt-2 rounded-lg text-white'>Download</button>
    </Link>
   </div>
))}
 </div>

{/* 
cards ends here
  */}

<h2 className='lg:ml-50 ml-35 lg:mt-15 mt-8 font-semibold'>Top Rated Materials</h2>


{/* cards 2 starts here */}
<div className='grid lg:grid-cols-3 grid-cols-2 lg:mt-4 mt-5 lg:ml-50  ml-10 gap-6 lg:mr-20 mr-10'>
{related.map((card,index)=>(

<div key={index} className='border lg:px-4 lg:py-2 lg:w-70 lg:h-20 rounded-lg shadow-md'>
<Link to={`/materialexams/${card.id}?model=toprelated`}>
    <p className='font-semibold lg:mt-2 lg:ml-3 ml-2 '>{card.name}</p>
    <p className='text-gray-400 ml-2 '>Note-2022</p>
  </Link>
  </div>

))}
</div>
{/* card 2 ends here */}


    </div>
  )
}

export default Minorexam


