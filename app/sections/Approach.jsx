"use client"
import React, { useEffect, useState } from 'react'
import { Approaching, Lines, Small } from '../components/Innovant'

const Approach = ({text1, text2, num, dot }) => {

  const [isLargeScreen, setIsLargeScreen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1200);
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className ="section">
      <p className='text-center text-2xl font-bold mb-9 '>Our Approach</p>
      {isLargeScreen ? (
        <div>
    <div className=' flex items-center justify-center  '>
    <Lines num = "1" dot = "." />
    <Lines num = "2" dot = "." />
    <Lines num = "3" dot = "." />
    <div className='flex items-center justify-center relative '>
      <div className='bg-gray-300 p-8 w-9 h-9 flex items-center justify-center rounded-full'>
        4
      </div>
      </div>
  </div>

  <div className='flex items-center justify-center gap-[5rem] text-center mt-6 '>
    <Approaching text1 ="Ideate" text2="Manage Business"/>
    <Approaching text1 ="Review" text2="Manage Business"/>
    <Approaching text1 ="Design & Develop" text2="Manage Business"/>
    <Approaching text1 ="Deploy" text2="Manage Business"/>
  </div>
  </div>
      ): (

      <div className='flex flex-col items-center justify-center gap-[2rem] text-center mt-6'>
      <Small text1 ="Ideate" text2="Manage Business" num = "1"/>
      <Small text1 ="Review" text2="Manage Business" num = "2"/>
      <Small text1 ="Design & Develop" text2="Manage Business" num = "3"/>
      <Small text1 ="Deploy" text2="Manage Business" num = "4"/>
    </div>
      )}


    </section>
  )
}

export default Approach