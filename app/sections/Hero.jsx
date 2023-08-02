import React from 'react'
import Image from 'next/image'
import bulb from "../../public/bulb.jpg"

const Hero = () => {
  return (
    <section>
      <div className='relative '>
        <Image src={bulb} alt="" className='w-full' />
        <div className='absolute inset-0 flex gap-5 flex-col items-center justify-center text-center text-white '>
          <p className='sm:text-5xl text-sm font-bold'>Where <br /> <span className='text-yellow-400'>Innovation</span>  <br /> Comes to <span className='text-yellow-400'>Life</span> </p>
          <small className='max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab sequi eos at cum quibusdam magni adipisci ad ipsum voluptatum porro tenetur, eum exercitationem beatae, nobis modi unde molestiae velit minima asperiores.</small>
          <button className='bg-blue-600 rounded-md px-5 py-2'>Get Started</button>
        </div>
      </div>
      <div class="bg-[public\bulb.jpg] bg-[size] bg-[position] bg-[repeat]">
</div>


    </section>
  )
}

export default Hero