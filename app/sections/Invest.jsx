import React from 'react'
import Image from 'next/image'
import trade from "../../public/trade.jpg"

const Invest = () => {
  return (
    <section className='bg-gray-300 '>
      <div className='section'>
          <Image src={trade} alt="" />
      </div>
    </section>
  )
}

export default Invest