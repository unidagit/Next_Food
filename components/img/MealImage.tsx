import Image from "next/image";
import React from "react";
import styles from "./MealImage.module.css";

function MealImage({ imageAddress }: { imageAddress: string }) {
  return (
    <Image
      src={imageAddress}
      fill
      className={styles.customImage}
      alt="mealsImage"
    />
  );
}

export default MealImage;
