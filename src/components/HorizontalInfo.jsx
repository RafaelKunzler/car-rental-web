/* eslint-disable react/prop-types */
import React from 'react'

const HorizontalInfo = (props) => {
  return (
    <div className='flex flex-col items-center gap-6 max-w-2xl text-center lg:flex-row lg:text-left '>
        <img className='w-36 h-36' src={props.img} alt="" />
        <div className='flex flex-col gap-3 '>
            <h3 className="font-bold  text-3xl lg:text-4xl">{props.title}</h3>
            <p className="text-muted-foreground text-lg lg:text-xl">{props.description}</p>
        </div>
        
    </div>
  )
}

export default HorizontalInfo