// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@material-ui/core/Container';
// Import Swiper styles
import 'swiper/swiper.scss';


import Banner1 from '../../uploads/images/banner/banner-01.jpg';
import Banner2 from '../../uploads/images/banner/banner-02.jpg';
import Banner3 from '../../uploads/images/banner/banner-03.jpg';
import Banner4 from '../../uploads/images/banner/banner-04.jpg';




class BannerSlider extends React.Component{
  render(){
    return(
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} 
      >
        <SwiperSlide><img src={Banner1} alt="" />
          <Container className="container">
            <h2>What is Lorem Ipsum?<br /><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small></h2>
          </Container>
        </SwiperSlide>
        <SwiperSlide><img src={Banner2} alt="" /> 
          <Container className="container">
            <h2>What is Lorem Ipsum?<br /><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small></h2>
          </Container>
        </SwiperSlide>
        <SwiperSlide><img src={Banner3} alt="" /> 
          <Container className="container">
            <h2>What is Lorem Ipsum?<br /><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small></h2>
          </Container>
        </SwiperSlide>
        <SwiperSlide><img src={Banner4} alt="" /> 
          <Container className="container">
            <h2>What is Lorem Ipsum?<br /><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small></h2>
          </Container>
        </SwiperSlide>
      </Swiper>
    )
  }
}

export default BannerSlider;