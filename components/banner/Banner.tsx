"use client";
import Slider from "react-slick";
import styles from "./Banner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import NextArrowImg from "../../images/NextArrowImg.svg";
// import PrevArrowImg from "../../images/PrevArrowImg.svg";

import food1 from "../../images/food1.jpg";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import Image from "next/image";

function NextArrow({ className, onClick, style }: any) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, right: "20px" }}
    >
      {/* <Image
        className={styles.nextImg}
        src={NextArrowImg}
        alt="NextArrow"
        width={20}
      /> */}
    </div>
  );
}

function PrevArrow({ className, onClick, style }: any) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, left: "20px", zIndex: "10" }}
    >
      {/* <Image
        className={styles.prevImg}
        src={PrevArrowImg}
        alt="PrevArrow"
        width={20}
      /> */}
    </div>
  );
}

const Banner = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.sliderContainer}>
          <Image src={food1} alt="foodImage" fill className={styles.image} />
        </div>
        <div className={styles.sliderContainer}>
          <Image src={food2} alt="foodImage" fill className={styles.image} />
        </div>
        <div className={styles.sliderContainer}>
          <Image src={food3} alt="foodImage" fill className={styles.image} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

// import Image from "next/image";
// import React from "react";
// import Slick from "../slider/Slick";
// import Logo from "../../images/LogoOrange.svg";

// function Banner() {
//   return (
//     <Slick>
//       <Image src={Logo} alt="logo" width={500} />
//     </Slick>
//   );
// }

// export default Banner;
