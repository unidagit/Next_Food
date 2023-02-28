import { useRouter } from "next/navigation";
import React from "react";
import { IrecipeProduct } from "../../../lib/api";
import MealImage from "../../img/MealImage";
import styles from "./RecipeCard.module.css";

function RecipeCard({ recipeInfo }: { recipeInfo: IrecipeProduct }) {
  console.log(recipeInfo);
  const router = useRouter();
  return (
    <div
      className={styles.recipeCardBox}
      onClick={() => router.push(`/recipe/id?r=${recipeInfo.id}`)}
    >
      <MealImage imageAddress={recipeInfo.itemImage} />
      <p>{recipeInfo.itemName}</p>
    </div>
  );
}

export default RecipeCard;
