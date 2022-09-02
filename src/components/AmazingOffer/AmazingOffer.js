import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./AmazingOffer.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { productData } from "../../ProductData";
import { GrFormPrevious } from "react-icons/gr";
import { FreeMode, Navigation } from "swiper";
import { useNavigate, Link } from "react-router-dom";
import Card from "../Card/Card";

const AmazingOffer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto px-4-lg px-0-2xl">
        <div
          className={`${style.amazingOffer} d-flex pos-relative overflow-hidden flex-nowrap`}
        >
          <Swiper
            dir="rtl"
            spaceBetween={2}
            slidesPerView={7}
            navigation={true}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <div className="ml-2 mr-5 d-flex my-auto h-full flex-column justify-content-center align-items-center">
                <a
                  href="#"
                  className="d-flex  flex-column justify-content-center align-items-center"
                >
                  <div className="image-first-text">
                    <img src="https://www.digikala.com/statics/img/svg/amazing-typo.svg" />
                  </div>
                  <div className="mt-2 image-first-box">
                    <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" />
                  </div>
                  <div className="mt-2 d-flex justify-content-center align-items-center first-text-more">
                    مشاهده همه
                    <GrFormPrevious size="1.6rem" />
                  </div>
                </a>
              </div>
            </SwiperSlide>

            {productData.map((item) => {
              return (
                <SwiperSlide className="item-amazing-offer">
                  <Link
                    to={`/product/${item.id}`}
                    className="d-block overflow-hidden flex-grow-1"
                  >
                    <Card
                      key={item.id}
                      image={item.original}
                      price={item.price}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AmazingOffer;
