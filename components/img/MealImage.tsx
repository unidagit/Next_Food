import Image from "next/image";
import React from "react";
import styles from "./MealImage.module.css";

function MealImage({ imageAddress }: { imageAddress: string }) {
  return (
    <Image
      src={imageAddress}
      width={200}
      height={200}
      className={styles.customImage}
      alt="mealsImage"
      placeholder="blur" // 추가
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" //추가
    />
  );
}

export default MealImage;
