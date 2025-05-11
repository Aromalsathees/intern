import React from 'react'
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Home1 = () => {
  return (
    <div className='w-full min-h-screen bg-black pt-20 px-4 '>

<div className="mt-30 lg:mt-2 px-6">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-white font-bold text-center text-2xl">
      {' '}Why Study Hub is the{' '}
      <span className="text-blue-300">
        Best Software Training
      </span>{' '}
      Institute in Chennai
    </h1>
  </div>
</div> 

     <div className='grid grid-cols-3 gap-6 lg:mt-15 mt-10 lg:ml-25 ml-5 lg:mr-20 mr:10 lg:gap-6'>
      <div className='flex flex-col'>
        <span className="material-symbols-outlined text-white lg:ml-10 lg:w-15 ">Home</span>
        <div className='text-blue-200 font-bold lg:text-4xl text-md lg:mt-5 mt-10' >{''}100%  {''}Assistance</div>
        <p className='text-white font-semibold lg:mt-3 mt-14 '>Hands-on experience with industry-relevant projects to build a professional portfolio.</p>
      </div>

      <div className='flex flex-col'>
      <span className="material-symbols-outlined text-white ml-5 w-15">settings</span>
        <div className='text-blue-200 font-bold lg:text-4xl text-md lg:mt-5 mt-10 '>Industry-Expert Trainers</div>
        <p className='text-white font-semibold  lg:mt-3 mt-8 '>Hands-on experience with industry-relevant projects to build a professional portfolio.</p>
      </div>

      <div className='flex flex-col'>
      <span className="material-symbols-outlined text-white ml-5 w-15">person</span>
        <div className='text-blue-200 font-bold lg:text-4xl text-md lg:mt-5 mt-10' >ISO-Certified Institute</div>
        <p className='text-white font-semibold  lg:mt-3 mt-14 '>Education guaranteed through ISO certification and standardized training methods..</p>
      </div>
     </div>

     <div className='bg-black h-10'></div>

    </div>
  )
}

export default Home1
