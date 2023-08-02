import React from 'react'
import Image from 'next/image'

const Innovant = ({img, text, head}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <div><Image src={img} alt="" className='w-' /></div>
        <p className='font-bold text-xl'>{head}</p>
        <p className='text-center max-w-[350px]'>{text}</p>
    </div>
  )
}




const Approaching = ({text1, text2}) => {
    return (
        <div className='flex flex-col gap-1'>
        <p className='font-bold'>{text1}</p>
        <p className='text-xs'>{text2}</p>
      </div>
    )
}

const Lines = ({num, dot}) => {
    return (
        <div className='flex items-center justify-center relative '>
        <div className='bg-gray-300 p-8 w-9 h-9 flex items-center justify-center rounded-full'>
          {num}
        </div>
        <div class="border border-dotted border-gray-500 w-32 h-0 text-transparent ">{dot}</div>
        </div>
    )
}

const Small = ({num, text1, text2}) => {
    return (
        <div className='flex flex-col gap-1 items-center'>
        <div className='bg-gray-300 p-8 w-9 h-9 flex items-center justify-center rounded-full'>
          {num}
        </div>    
        <p className='font-bold'>{text1}</p>
        <p className='text-xs'>{text2}</p>
      </div>
    )
}

export {Innovant, Approaching, Lines, Small}