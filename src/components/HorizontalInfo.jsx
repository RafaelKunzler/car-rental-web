/* eslint-disable react/prop-types */
import React from 'react'

const HorizontalInfo = (props) => {
  return (
    <div className='flex items-center gap-6 max-w-2xl'>
        <img className='w-36 h-36' src={props.img} alt="" />
        <div className='flex flex-col gap-3'>
            <h3 className="font-bold text-4xl">{props.title}</h3>
            <p className="text-muted-foreground text-xl">{props.description}</p>
        </div>
        
    </div>
  )
}

export default HorizontalInfo