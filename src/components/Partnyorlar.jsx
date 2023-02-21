import React from 'react'
import Partnyor from './Partnyor'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay} from 'swiper';
import partnyorShirketi1 from '../assets/images/Group 400.png'
import partnyorShirketi2 from '../assets/images/Group 401.png'
import partnyorShirketi3 from '../assets/images/Group 402.png'
import partnyorShirketi4 from '../assets/images/Group 403.png'
import './Partnyorlar.css'


const Partnyorlar = () => {
  return (
  <>  

<Swiper
        slidesPerView={3}
        spaceBetween={30}


        breakpoints={{
          327: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

      autoplay

       modules={[Autoplay]}
        className="mySwiper"
        >

        <SwiperSlide><Partnyor shirketinLogosu={partnyorShirketi1} /></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={partnyorShirketi2}/></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={partnyorShirketi3} /></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={partnyorShirketi4} /></SwiperSlide>
      
      </Swiper>



    </>
  )
}

export default Partnyorlar