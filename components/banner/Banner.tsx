"use client";
import Slider from "react-slick";
import styles from "./Banner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    ></div>
  );
}

function PrevArrow({ className, onClick, style }: any) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, left: "20px", zIndex: "10" }}
    ></div>
  );
}

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
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
