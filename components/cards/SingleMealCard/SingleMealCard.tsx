import { useRouter } from "next/navigation";
import React from "react";
import { IsearchMeal } from "../../../lib/api";
import MealImage from "../../img/MealImage";
import styles from "./SingleMealCard.module.css";

function SingleMealCard({ idMeal, strMealThumb, strMeal }: IsearchMeal) {
  const router = useRouter();
  return (
    <>
      <div
        className={styles.mealCardBox}
        onClick={() => router.push(`/meals/search?q=${idMeal}`)}
      >
        <MealImage imageAddress={strMealThumb} />
        <p>{strMeal}</p>
      </div>
    </>
  );
}

export default SingleMealCard;
