import React from 'react'
import CardTwo from '../Cards/CardTwo'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const ProductsSection = ({products}) => {
  return (
    <div className="shipping-section">
        <Swiper 
            modules={[Autoplay]}
            slidesPerView={4}
            breakpoints={{
                0 : {
                    slidesPerView : 1,
                },
                780 : {
                    slidesPerView : 4,
                    spaceBetween : 10,
                }

            }}
            autoplay={true}
            loop={true}
        >
        {
            products.map((product, index) => (
                <SwiperSlide>
                    <CardTwo
                        key={index}
                        image={product.image} 
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                </SwiperSlide>
            ))
        }
        </Swiper>

    </div>
  )
}

export default ProductsSection