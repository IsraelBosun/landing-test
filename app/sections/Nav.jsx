import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo-img.png"

const Nav = () => {
  return (
 <section className='bg-white '>
 <div className='flex px-[3rem] py-1 justify-between'>
  <div className='flex gap-12  items-center'>
    <div className='w-[100px]'><Image src={logo} alt="" className='w-full' /></div>
    <p className='text-yellow-500'>Home</p>
    <p>About</p>
    <p>Blog</p>
    <p>Contact Us</p>
  </div>

  <div className ="flex items-center justify-between gap-6">
    <button className='border rounded-lg px-4 py-2 border-blue-600 text-blue-600'>Becone a member</button>
    <button className='border rounded-lg px-4 py-2 bg-blue-600 text-white'>Submit an idea</button>
  </div>
</div> 
 </section> 
  )
}

export default Nav





{/* <section className='bg-white '>
{/* <div className='flex p-4 justify-between'>
  <div className='flex gap-12  items-center'>
    <div><Image src={logo} alt="" className='w-2/3' /></div>
    <p>Home</p>
    <p>About</p>
    <p>Blog</p>
    <p>Contact Us</p>
  </div>

  <div className ="flex items-center justify-between gap-6">
    <button className='border rounded-lg px-4 py-2 border-blue-600 text-blue-600'>Becone a member</button>
    <button className='border rounded-lg px-4 py-2 bg-blue-600 text-white'>Submit an idea</button>
  </div>
</div> */}
// </section> */}