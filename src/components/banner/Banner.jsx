import slide1 from '../../assets/image/slide1.jpg'
import slide2 from '../../assets/image/slide2.jpg'
import slide3 from '../../assets/image/slide3.jpg'
import slide4 from '../../assets/image/slide4.jpg'

import slide5 from '../../assets/image/slide5.jpg'
import slide6 from '../../assets/image/WhatsApp Image 2024-04-26 at 14.44.41_2fad2308.jpg'

import { A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <Swiper
        modules={[ A11y]} 
        // Autoplay
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2500 }} 
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide  style={{ height: "500px" }}>
            <div className='flex '>
            <div className=" inset-0 w-[40%] bg-black shadow-[rgba(0,0,5,50)_0px_0px_100px_100px]"></div>
        
            <div className='w-[60%] h-full bg-contain'>
            <img src={slide3} alt="Slide 1" className='w-full h-full '/>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide  style={{ height: "500px" }}>
        <div className='flex relative '>
            <div className="absolute inset-0 w-[40%] bg-black shadow-[rgba(0,0,5,50)_0px_0px_100px_100px]"></div>
        
            <div className='w-[60%] h-full bg-contain'>
            <img src={slide3} alt="Slide 1" className='w-full h-full '/>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide  style={{ height: "500px" }}>
        
        <div className='flex relative'>
            <div className="absolute inset-0 w-[40%] bg-black shadow-[rgba(0,0,5,50)_0px_0px_100px_100px]"></div>
        
            <div className='w-[60%] h-full bg-contain'>
            <img src={slide3} alt="Slide 1" className='w-full h-full '/>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide  style={{ height: "500px" }}>
       
        <div className='flex relative'>
            <div className="absolute inset-0 w-[40%] bg-black shadow-[rgba(0,0,5,50)_0px_0px_100px_100px]"></div>
        
            <div className='w-[60%] h-full bg-contain'>
            <img src={slide3} alt="Slide 1" className='w-full h-full '/>
            </div>
            </div>
            </SwiperSlide>
      </Swiper>
     
    );
};

export default Banner;