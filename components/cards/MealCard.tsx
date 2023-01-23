import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { ICategoriesMeals } from "../../lib/api";
import styles from "./MealCard.module.css";

function MealCard({ mealInfo }: { mealInfo: ICategoriesMeals }) {
  const router = useRouter();
  return (
    <button
      className={styles.item}
      type="button"
      onClick={() => router.push(`/meals/search?q=${mealInfo.idMeal}`)}
    >
      <Image
        className={styles.image}
        src={mealInfo.strMealThumb}
        alt="Picture of the food"
        width={200}
        height={200}
      />
      <p>{mealInfo.strMeal}</p>
    </button>
  );
}

export default MealCard;
