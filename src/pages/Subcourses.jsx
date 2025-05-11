import React from 'react'
import axios from 'axios'
import Allcards from '../components/Allcards'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


const Subcourses = () => {
  const [cards,setCards] = useState([])
  const { id } = useParams();
  console.log("Id from url:",id)

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/GetSubCourses/${id}`).then(response=>setCards(response.data)).catch(error=>console.error(error));
  },[id]);

  useEffect(() => {
    console.log(cards)
  }, [cards])
  

  return (
    
    <div>      
<h1 className="text-3xl font-bold lg:ml-160 ml-30 text-black lg:mb-8 mb-4 lg:mt-30 mt-40">Topics</h1>
<p className='lg:ml-160 ml-26 lg:mt-[-20px] text-gray-500 text-sm font-bold'>Browse study materials by Topics</p>

<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:ml-20 ml-7 justify-center lg:gap-6 gap-3 lg:mt-10 mt-4  ">
        {cards.map((card, index) => (
          <Allcards key={index} name={card.name} route={`/minorcourse/${card.id}`} />
        ))}
</div>
</div>  
  
  )
}

export default Subcourses