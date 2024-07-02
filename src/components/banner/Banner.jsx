import slide1 from '../../assets/image/s1.jpg'
import slide2 from '../../assets/image/s2.jpg'
import slide3 from '../../assets/image/s5 (1).jpg'
import slide4 from '../../assets/image/s6.jpg'

import { A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
    
    return (
        <Swiper
        modules={[ Autoplay,A11y]} 
        // Autoplay
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }} 
        
      >
        <SwiperSlide  style={{ height: "550px" }}>
            <div className='flex h-[550px] relative'>
            <div className="absolute inset-0 w-[40%] bg-black shadow-[rgba(0,0,5,50)_0px_0px_100px_100px]">
                <div className='absolute top-[25%] left-[10%] '>
                    <h1 className='text-white text-5xl'>Unleash Your Inner Artist...</h1>
                    <p className='text-white text-[18px] py-6'> Elevate Your Space with Handcrafted Creations</p>
               
                </div>
            </div>
                    <div className='w-full h-full bg-contain '>
                        <img src={slide1} alt="Slide 1" className='w-full h-full' />
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide  style={{ height: "550px" }}>
            <div className='flex h-[550px] relative'>
                    <div className="absolute inset-0 w-[40%] bg-black shadow-[rgba(0,0,5,50)_0px_0px_100px_100px]">
                    <div className='absolute top-[25%] left-[10%]'>
                        <h1 className='text-white text-5xl'>Elevate Your Collection...</h1>
                        <p className='text-white text-[18px] py-6'>Invest in Original Paintings and Drawings</p>
               
                </div>

                    </div>
                    <div className='w-full h-full bg-contain '>
                        <img src={slide2} alt="Slide 2" className='w-full h-full' />
                    </div>
            </div>
            </SwiperSlide>
        <SwiperSlide  style={{ height: "550px" }}>
        
        <div className='flex h-[550px] relative'>
            <div className="absolute inset-0 w-[40%] bg-black shadow-[rgba(0,0,5,50)_0px_0px_100px_100px]">
            <div className='absolute top-[25%] left-[10%]'>
                    <h1 className='text-white text-5xl'>Discover Fine Artistry...</h1>
                    <p className='text-white text-[18px] py-6'> Curated Paintings and Drawings for Discerning Collectors</p>
               
                </div>
            </div>
                    <div className='w-full h-full bg-contain '>
                        <img src={slide3} alt="Slide 3" className='w-full h-full' />
                    </div>
            </div>
            </SwiperSlide>
        <SwiperSlide  style={{ height: "550px" }}>
       
        <div className='flex h-[550px] relative'>
            <div className="absolute inset-0 w-[40%] bg-black shadow-[rgba(0,0,5,50)_0px_0px_100px_100px]">
            <div className='absolute top-[25%] left-[10%]'>
                    <h1 className='text-white text-5xl'>Unleash Creativity...</h1>
                    <p className='text-white text-[18px] py-6'>Find the Perfect Painting or Drawing to Inspire</p>
               
                </div>
            </div>
                    <div className='w-full h-full bg-contain '>
                        <img src={slide4} alt="Slide 4" className='w-full h-full' />
                    </div>
            </div>
            </SwiperSlide>
      </Swiper>
     
    );
};

export default Banner;