import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Navigation,Autoplay } from "swiper";

import Slider1 from './Assets/slider.webp'
import Slider2 from './Assets/slider2.webp'
import Slider3 from './Assets/slider3.jpg'


const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation,Autoplay ]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className='mySwiper h-96 w-[85vw] bg-green-300 bg-opacity-20 flex justify-center items-center rounded-3xl mt-20'> 
        <SwiperSlide className="text-center align-middle leading-[384px]"><img className="w-full h-full object-cover" src={Slider1} alt="" /></SwiperSlide>
        <SwiperSlide className="text-center align-middle leading-[384px]"><img className="w-full h-full object-cover" src={Slider2} alt="" /></SwiperSlide>
        <SwiperSlide className="text-center align-middle leading-[384px]"><img className="w-full h-full object-cover" src={Slider3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
