import { Box } from "@chakra-ui/react"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./HomeCrousal1.css"

export const HomeCrousal5 = () => {
   return (
    <>
    <Box>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="raviSwipper1"
      >
        <SwiperSlide className="raviSlider1"><img src="HomeImages/Homecrousal5/homeCrousal5img1.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="HomeImages/Homecrousal5/homeCrousal5img2.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="HomeImages/Homecrousal5/homeCrousal5img3.png" alt="Error"/></SwiperSlide>
        <SwiperSlide className="raviSlider1"><img src="HomeImages/Homecrousal5/homeCrousal5img4.png" alt="Error"/></SwiperSlide>
      </Swiper>
    </Box>
    </>
   )
  }