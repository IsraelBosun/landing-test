import React from 'react'

const Testi = ({testimony, namee, job}) => {
  return (
<div className='flex flex-col  gap-4 py-9'>
    <p className='uppercase text-blue-600'>Testimonials</p>
    <p className='font-bold max-w-[400px]'>"{testimony}"</p>
    <div className='flex items-center text-gray-300 gap-4'>
      <small>{namee}</small>
      <small>{job}</small>
    </div>
  </div>
  )
}

export default Testi