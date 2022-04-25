import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import * as FaIcons from "react-icons/fa";

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Hero({ heroItems }) {
  const heroImage = `relative w-full md:h-[980px] h-[725px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 before:z-[1] before:pointer-events-none overflow-hidden`;
  const heroContent = `absolute sm:w-[calc(100%_-_100px)] left-auto top-1/2 transform translate-y-[-50%] z-[2]`;
  return (
    <Swiper
      className="hero-area"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1000}
      pagination={{ clickable: true, type: "bullets" }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
    >
      {heroItems?.map((heroItem, i) => {
        const TwitterIcon = FaIcons[heroItem?.twitterIcon];
        const FacebookIcon = FaIcons[heroItem?.facebookIcon];
        const GoogleIcon = FaIcons[heroItem?.googleIcon];
        return (
          <SwiperSlide className="hero-item" key={i}>
            <div className={heroImage}>
              <Image
                src={heroItem?.image}
                alt={heroItem?.title}
                layout="fill"
                objectFit="cover"
                quality={70}
                priority
              />
            </div>
            <div className="mouse-btn-wrap absolute bottom-[30px] left-1/2 -translate-x-1/2">
              <Link href="#about" passHref>
                <ul className="mouse-btn-down">
                  <li className="chevron animate-move"></li>
                  <li className="chevron animate-move2"></li>
                  <li className="chevron animate-move3"></li>
                </ul>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Hero;
