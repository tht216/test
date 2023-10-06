import { type FC, type ReactNode, useState } from "react";
import type SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderItem from "@src/components/Slider/item";
import { CUSTOMER_ITEMS } from "@src/constants/home";
import arrow from "@src/assets/icons/home/left.svg";
import Image from "next/image";
import { type ICustomerItem } from "@src/types/home";

interface Props {
  className?: string;
  children?: ReactNode;
  customerItem?: ICustomerItem[];
}

const Slider: FC<Props> = ({
  className = "",
  customerItem = CUSTOMER_ITEMS,
}) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <>
      <div className={cn("relative max-w-[1110px] mx-auto", className)}>
        <Swiper
          // install Swiper modules
          onInit={(ev) => {
            setSwiper(ev);
          }}
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          loop={true}
          breakpoints={{
            1110: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
          }}
        >
          {customerItem.map((value, index) => (
            <SwiperSlide key={index}>
              <SliderItem customer={value} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination w-full flex gap-3.5 pt-[2.87rem] items-center justify-center"></div>
        <div className="swiper-navigation w-full z-10 hidden 2xl:flex absolute top-1/2 -translate-y-1/2 items-center justify-between">
          <div
            className="button-prev flex justify-center items-center w-[4rem] aspect-square cursor-pointer relative -translate-x-[6.81rem]"
            onClick={() => {
              if (swiper) swiper.slidePrev();
            }}
          >
            <Image src={arrow} alt="arrow-left" className="w-full" />
          </div>
          <div
            className="button-prev flex justify-center items-center w-[4rem] aspect-square cursor-pointer translate-x-[6.81rem]"
            onClick={() => {
              if (swiper) swiper.slideNext();
            }}
          >
            <Image
              src={arrow}
              alt="arrow-right"
              className="rotate-180 w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
