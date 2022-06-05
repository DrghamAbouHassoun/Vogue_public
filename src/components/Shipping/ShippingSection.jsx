import React from 'react'
import products from '../../data/Products.json';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation';

const ShippingSection = ({title}) => {
  return (
    <div className="shipping-section">
        <div className="title">
            <h1>{title}</h1>
        </div>
        <div className="shipping-row">
          {
            products.map((product, index) => (
              <div className="shipping-card" key={index} >
                <img src={product.imageOne} alt="shipping product" />
              </div>
            ))
          }
        </div>
        <Swiper
          className="shipping-slider"
          modules={[Navigation]}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            2 : {
              slidesPerView : 1,
              // spaceBetween : 5,
              loop : true,
              // autoplay : true,
              // mousewheel : true
            },
            425 : {
              slidesPerView : 2,
              // spaceBetween : 10,
              loop : true,
              // autoplay : true,
            },
            770 : {
              slidesPerView : 4,
              loop : false,
              // width: "100%"
              // spaceBetween : 30,
              // autoplay : true
            }
            }}
        >
        {
            products.map((product, index) => (
            <SwiperSlide>
            <div key={index}>
                <img src={product.imageOne} alt="product" width="100%" />
            </div>
            </SwiperSlide>
        ))
        }
        </Swiper>
    </div>
  )
}

export default ShippingSection