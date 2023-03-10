"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./RandomFood.module.css";
import useGetRandomFoodQuery from "../../hooks/queries/useGetRandomFoodQuery";

function RandomFood() {
  const { data: randomFoodData } = useGetRandomFoodQuery();

  return (
    <div>
      <h2>오늘은 이 메뉴 어떠세요?</h2>
      {randomFoodData && (
        <>
          <Link href="/meals">
            <Image
              className={styles.foodImage}
              src={randomFoodData?.strMealThumb}
              width={260}
              height={260}
              alt="foodImage"
            />
          </Link>
          <p className={styles.foodName}>{randomFoodData.strMeal}</p>
        </>
      )}
    </div>
  );
}

export default RandomFood;
