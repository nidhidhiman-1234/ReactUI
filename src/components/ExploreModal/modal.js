import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Header from "../Header/header";
import { useStore } from "../constant";

export default function Modal() {
  const [swiperIndex,setSwiperIndex]=useState(0)
  const {handleExploreModal}=useStore(state=>state)
  const [itemList,setItemList]=useState([{src:'/ai1.webp'},{src:'/ai2.jpg'},{src:'/ai3.jpg'},{src:'/bb.webp'}])
  return (
    <>
    <div className="parent-container">
      <div className="contain">
        <div className="main-container">
          <Swiper
            onActiveIndexChange={items => setSwiperIndex(items.activeIndex)}
            slidesPerView={1}
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
              "--swiper-pagination-bullet-inactive-color": "#D8D8D8",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "--swiper-pagination-bullet-width": "24px",
              "--swiper-pagination-bullet-height": "5px",
              "--swiper-pagination-bullet-border-radius": "14px",
            }}
            watchSlidesVisibility={true}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            pagination={{
              clickable: true,
              duynamicBullets: true,
            }}
            cssMode={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {
             itemList.map((item,index)=>{
                return (
            <SwiperSlide key={index}>
              <div className="containers">
                <div
                 className="container-image"
                >
                  <img src={item.src} style={{objectFit:"fill"}}/>
                  </div>
                <div className="texts">
                  <p className="paragraph">
                    Artificial Intelligence (AI) has emerged as one of the most
                    transformative and influential technologies of the 21st
                    century. It is a multidisciplinary field that combines
                    computer science, mathematics, and cognitive psychology to
                    create intelligent machines capable of mimicking human
                    intelligence and decision-making. In this essay, we will
                    explore the various aspects of AI, its impact on society,
                    and its potential for the future. AI can be broadly
                    categorized into two main types: narrow or weak AI and
                    general or strong AI.
                  </p>
                </div>
              </div>
            </SwiperSlide>
                )
              })
            }
          
          </Swiper>
          <div className="btn-container">
          {<div className="arrow-left" style={{opacity:swiperIndex!=0?1:0}}>
            <img src="/left.png" className="img1" />
          </div>}
          <div style={{opacity:swiperIndex!=3?1:0}} className="arrow-right">
            <img src="/right.png" className="img1" />
          </div>
        </div>
        </div>
      </div>
      <div className="btn" onClick={()=>{
        handleExploreModal(true)
        }}>
        <span className="explore">EXPLORE NOW</span>
      </div>
    </div>
    </>
  );
}
const getModalPosition = (menuRef) => {
  if (menuRef.current) {
    const rect = menuRef.current.getBoundingClientRect();
    return {};
  }
  return {};
};
