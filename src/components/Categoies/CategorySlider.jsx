import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import categories from '../../data/Categories.json';
import SwiperCore, { Autoplay, Navigation, Pagination, Zoom, A11y } from 'swiper';
import CategoryCard from './CategoryCard';

const CategorySlider = ({handleImageChange}) => {
    SwiperCore.use(Autoplay)

  return (
    <div className="categories-section">
        <Swiper 
            modules={[Autoplay, Navigation, Pagination, Zoom, A11y]}
            autoplay={{
                delay : 2000,
                disableOnInteraction : false
            }}
            breakpoints={{
                2 : {
                    slidesPerView : 1,
                    spaceBetween : 5,
                    loop : true,
                    // autoplay : true,
                    // mousewheel : true
                },
                425 : {
                    slidesPerView : 2,
                    spaceBetween : 10,
                    loop : true,
                    // autoplay : true,
                },
                770 : {
                    slidesPerView : 3,
                    spaceBetween : 30,
                    // autoplay : true
                }

            }}
            spaceBetween={30}
            loop={true}
        >
        {
        categories.map((cat, index) => (
            <SwiperSlide key={index}>
                <CategoryCard image={cat} handleImageChange={handleImageChange} />
            </SwiperSlide>
        ))
        }
        </Swiper>
    </div>
  )
}

export default CategorySlider