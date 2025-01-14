import React, { useRef } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

interface MovieOrSeries {
  id: number;
  backdropUrl: string;
}

interface CardListProps {
  title: string;
  moviesAndSeries: MovieOrSeries[];
}

const CardList: React.FC<CardListProps> = ({ title, moviesAndSeries }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="cardList">
      <h2>{title}</h2>
      <div className="swiper-and-buttons relative">
        <Swiper
          loop={true}
          spaceBetween={5}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: SwiperType) => {
            const navigation = swiper.params.navigation;

            if (navigation && navigation !== true) {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            1378: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            998: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            625: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          {moviesAndSeries.map((item) => (
            <SwiperSlide key={item.id}>
              <Card backdropUrl={item.backdropUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={prevRef}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 h-full p-2 bg-gray-700 text-white hover:bg-gray-600 focus:outline-none z-50"
        >
          {"<"}
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 h-full p-2 bg-gray-700 text-white hover:bg-gray-600 focus:outline-none z-50"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default CardList;
