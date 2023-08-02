import React from 'react'
import {Innovant} from '../components/Innovant'
import paper from "../../public/pappp.png"
import people from "../../public/peoplee.png"
import web from "../../public/webb.png"

const Innovators = ({text, img, head}) => {
  return (
    <section className='section'>
      <div className='flex flex-col items-center text-center gap-2'>
        <p className='text-3xl font-bold'>Built <span className='font'>for</span>  innovators, <span className='font'> by </span>innovators</p>
        <p className='text-xs '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui <br className='hidden lg:block' /> officiis officia voluptatibus ipsam!</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
      <Innovant text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus sunt reiciendis nesciunt! Dolor illum eligendi aliquid vel magnam culpa velit, ullam accusamus fuga recusandae." img={paper} head ="Submit ideas" />
      <Innovant text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus sunt reiciendis nesciunt! Dolor illum eligendi aliquid vel magnam culpa velit, ullam accusamus fuga recusandae." img={people} head ="Expert Evaluation" />
      <Innovant text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus sunt reiciendis nesciunt! Dolor illum eligendi aliquid vel magnam culpa velit, ullam accusamus fuga recusandae." img={web} head ="Access to resources" />
      </div>
    </section>

  )
}

export default Innovators