import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "./imageSlider.css";

const ImageSlider = () => {
  return (
    <div className="Slider">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="poster_img"
            src="https://i.pinimg.com/originals/d0/78/70/d078705c172a131d88c67bd19986172d.jpg"
            alt="poster"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="poster_img"
            src="https://i.pinimg.com/originals/f3/66/6c/f3666c5ad466a64d0a64fa07debcdd3d.jpg"
            alt="poster"
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="poster_img"
            src="https://www.fashionkafatka.com/media/catalog/category/ofer_banner_12.jpg"
            alt="poster"
            
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
