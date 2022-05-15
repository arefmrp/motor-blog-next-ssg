
import React, { useRef, useState } from "react";
// Import Swiper React components


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles



// import Swiper core and required modules
import SwiperCore, {
    Pagination,Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Autoplay]);


function Slider(){
    return (
        <Swiper
            spaceBetween={20}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
            className="mySwiper"
            breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 3,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 4,
                    "spaceBetween": 50
                },
                "1400": {
                    "slidesPerView": 5,
                    "spaceBetween": 50
                }
            }}


            autoplay = {{
                "delay": 2500,
                "disableOnInteraction": false
            }}

        >
            <SwiperSlide><img src={`/image/sc1.png`} className="swiper-img"></img></SwiperSlide>
            <SwiperSlide><img src={`/image/sc2.jpg`} className="swiper-img"></img></SwiperSlide>
            <SwiperSlide><img src={`/image/sc3.jpg`} className="swiper-img"></img></SwiperSlide>
            <SwiperSlide><img src={`/image/sc4.png`} className="swiper-img"></img></SwiperSlide>
            <SwiperSlide><img src={`/image/sc1.png`} className="swiper-img"></img></SwiperSlide>
            <SwiperSlide><img src={`/image/sc2.jpg`} className="swiper-img"></img></SwiperSlide>
            <SwiperSlide><img src={`/image/sc3.jpg`} className="swiper-img"></img></SwiperSlide>
            <SwiperSlide><img src={`/image/sc4.png`} className="swiper-img"></img></SwiperSlide>





        </Swiper>
    );
};


export default Slider;