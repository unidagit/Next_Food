import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { ICategoriesMeals } from "../../lib/api";
import styles from "./MealCard.module.css";
import MealImage from "../img/MealImage";

function MealCard({ mealInfo }: { mealInfo: ICategoriesMeals }) {
  const router = useRouter();
  return (
    <div
      className={styles.mealCardBox}
      onClick={() => router.push(`/meals/search?q=${mealInfo.idMeal}`)}
    >
      <MealImage imageAddress={mealInfo.strMealThumb} />
      <p>{mealInfo.strMeal}</p>
    </div>
  );
}

export default MealCard;
