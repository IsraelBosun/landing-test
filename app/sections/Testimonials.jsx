"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import people from "../../public/group-img.png";
import testimonials from "../components/data.jsx";
import Testi from '../components/Testi';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./style.css"

const Testimonials = () => {
  return (
    <section className="section">
      <div className='grid md:grid-cols-12 gap-3 items-center justify-items-center'>
        <div className='col-span-6'><Image src={people} alt="" className='sm:min-w-[500px]' /></div>
        
        <Swiper pagination={true} modules={[Pagination]} className='max-w-[300px] flex-1 testii col-span-6 cursor-pointer'>
          {testimonials.map((test) => (
            <SwiperSlide key={test.id}>
              <Testi {...test} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
