import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

 import img1 from '../assets/img1.svg';
 import img2 from '../assets/img2.svg';
 import img3 from '../assets/img3.svg';
 import img4 from '../assets/img4.svg';

 import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
width: 25vw;
height: 70vh;

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
  background-color: ${props => props.theme.carouselColor};

  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next{
  color: ${props => props.theme.text};
  right: 0;
  width: 4rem;
  top: 60%;

  background-image: url(${Arrow});
  background: center;
  background-size: cover;

  &:after{
    display: none;
  }
}

.swiper-button-prev{
  color: ${props => props.theme.text};
  left: 0;
  top: 60%;
  width: 4rem;
  transform: rotate(180deg);
  background-image: url(${Arrow});
  background: center;
  background-size: cover;

  &:after{
    display: none;
  }
}
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            type:'fraction',
          }}
          scrollbar={{
            draggable:true
          }}
            modules={[EffectCards,Pagination, Navigation, Autoplay]}
            effect={"cards"}
            grabCursor={true}
            navigation={true}
            
            className="mySwiper"
        >
            <SwiperSlide> <img src={img1} alt="Fundhous" /> </SwiperSlide>
            <SwiperSlide> <img src={img2} alt="Fundhous" /></SwiperSlide> 
            <SwiperSlide> <img src={img3} alt="Fundhous" /></SwiperSlide> 
            <SwiperSlide> <img src={img4} alt="Fundhous" /></SwiperSlide>    
        </Swiper>
    </Container>
  )
}

export default Carousel