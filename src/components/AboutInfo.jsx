/* eslint-disable react/prop-types */
import React from 'react'

const AboutInfo = (props) => {
  return (
    <div className='flex flex-col content-between sm:w-40 items-center lg:items-start'>
        <div className=''>
            {props.image}            
        </div>
        <div className='flex items-center flex-col sm:flex-row gap-4'>
            <h1 className="font-black  text-4xl sm:text-6xl">{props.number}</h1>
            <h3 className=" text-md sm:text-lg text-gray-600">{props.text}</h3>
        </div>
    </div>
  )
}

export default AboutInfo