import React from 'react'
import ProductCard from './ProductCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import ProductCardTwo from './ProductCardTwo';

const SujestedSection = ({title, type, columns, products}) => {
  return (
    <div className="sujested-section">
        <div className="title">
            <h1>{title}</h1>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={columns}
          mousewheel={true}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0 : {
              slidesPerView : 1,
            },
            425 : {
              slidesPerView : columns - 1
            },
            780 : {
              slidesPerView : columns
            }
          }}
        >
        {
          products.map((product, index) => (
            <SwiperSlide key={index}>
              {
              type === "normal" ?
              <ProductCard 
                imageOne={product.imageOne}
                imageTwo={product.imageTwo}
                description={product.description}
                price={product.price}
              /> :
              <ProductCardTwo 
                image={product.imageOne}
              />
              }
            </SwiperSlide>
          ))
        }
        </Swiper>
    </div>
  )
}

export default SujestedSection