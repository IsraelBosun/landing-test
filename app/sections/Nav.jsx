'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import logo from "../../public/logot.png"
import { HiMenuAlt1, HiX } from "react-icons/hi";


const Nav = () => {

  const [toggle, setToggle] = useState(false);

  const show = () => {
    setToggle(true)
  }

  const hide = () => {
    setToggle(false)
  }

  return (
 <section className='bg-white '>
 <div className='flex px-[1rem] md:px-[3rem]  justify-between cursor-pointer'>
  <div className='flex gap-12 md:py-0 items-center'>
    <div className='md:w-[150px]'><Image src={logo} alt="" className='w-full' /></div>
    <p className='text-yellow-400 md:flex hidden'>Home</p>
    <p className='md:flex hidden'>About</p>
    <p className='md:flex hidden'>Blog</p>
    <p className='md:flex hidden'>Contact Us</p>
  </div>

  <div className ="flex items-center justify-between gap-6 ">
    <button className='border rounded-lg px-4 py-2 border-blue-600 text-blue-600 md:flex hidden'>Become a member</button>
    <button className='border rounded-lg px-4 py-2 bg-blue-600 text-white md:flex hidden'>Submit an idea</button>
    <HiMenuAlt1 className='md:hidden text-3xl' onClick={show}/>
  </div>
</div> 

    {toggle && (
      <>
        <div className="fixed h-full w-96 top-0 left-0 z-20 bg-blue-600 text-white flex flex-col justify-center  items-center shadow-lg gap-8 py-8">
        <p className='text-yellow-500'>Home</p>
      <p>About</p>
      <p>Blog</p>
      <p>Contact Us</p>
      <button className=' rounded-lg px-4 py-2 bg-white text-blue-600 md:flex '>Become a member</button>
    <button className='border rounded-lg px-4 py-2 bg-blue-600 text-white md:flex '>Submit an idea</button>
        <HiX className="absolute right-12 text-white top-12 text-3xl cursor-pointer" onClick={hide} />
        </div>
      </>
    )}

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