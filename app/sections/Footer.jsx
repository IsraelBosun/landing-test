import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo-img.png"

const Footer = () => {
  return (
    <section className='bg-blue-900 text-white text-xs sm:text-2xl'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:justify-items-center  gap-2 xs:gap-6 lg:gap-0 section  '>
          <div className='flex flex-col   max-w-sm'>
              <div><Image src={logo} className='w-3/5' alt="" /></div>
              <p className='text-sm'>Encouraging innovation through <br /> collaboration and idea sharing</p>
              <div>
                icons
              </div>
          </div>
          {/* xs:grid-cols-1 sm:grid-cols-2 */}
      {/* <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 lg:justify-items-center sm:justify-items-start  '> */}
          <div className='flex flex-col gap-4   '>
          <p className='text-xl font-bold'>Company</p>
              <ul className='flex text-sm flex-col gap-2 '>
                <li>About</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
          </div>
          <div className='flex flex-col gap-4 '>
          <p className='text-xl font-bold'>Support</p>
              <ul className='flex text-sm flex-col gap-2'>
                <li>FAQ's</li>
                <li>Terms Of Service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
              </ul>
          </div>
          <div className='flex flex-col gap-2  w-full text-sm'>
            <p>Stay up to date</p>
            <label htmlFor="">
              <input type="email" name="" className = "w-full rounded-md p-2" id="" />
            </label>
          </div>
      {/* </div> */}
    </div>  
    </section>
  )
}

export default Footer