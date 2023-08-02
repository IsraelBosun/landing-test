import React from 'react'
import Image from 'next/image'
import trade from "../../public/trade.jpg"

const Invest = () => {
  return (
    <section className='bg-gray-300 '>
    <div className='section flex justify-center relative'>
        <Image src={trade} alt="" className='w-5/6 rounded-xl h-auto' />
    <div className='flex flex-col gap-2 sm:gap-4 bg-white px-4 py-4 w-1/3 rounded-md absolute right-[20%] top-[30%] max-w-[300px] '>
      <p className='text-xs sm:text-xl font-bold'>Invest in the future <br /> of innovation</p>
      <small className='max-w-[300px] text-xs sm:text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quasi at nemo alias, <span className='hidden md:block'>laudantium voluptatum sunt distinctio, mollitia praesentium, tempora maxime doloremque ducimus laborum. Ipsa reprehenderit voluptas, voluptatibus</span> </small>
    <button className='bg-blue-600 rounded-md px-1 sm:px-2 sm:py-3 py-1 text-white text-xs sm:text-sm sm:w-2/3 w-full'>Become a member</button>
    </div>
    </div>
  </section>
  )
}

export default Invest