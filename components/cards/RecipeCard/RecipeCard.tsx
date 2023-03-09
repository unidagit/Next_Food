import { useRouter } from "next/navigation";
import React from "react";
import useDeleteMyRecipeMutation from "../../../hooks/mutations/useDeleteMyRecipeMutation";

import { IrecipeProduct } from "../../../lib/api";
import { Button } from "../../buttons/Button";
import MealImage from "../../img/MealImage";
import styles from "./RecipeCard.module.css";

function RecipeCard({ recipeInfo }: { recipeInfo: IrecipeProduct }) {
  const router = useRouter();

  const { mutate: myRecipeDelete } = useDeleteMyRecipeMutation();

  return (
    <>
      <div className={styles.recipeCardBox}>
        <div
          className={styles.imageBox}
          onClick={() => router.push(`/recipe/id?r=${recipeInfo.id}`)}
        >
          <MealImage
            width={420}
            height={280}
            imageAddress={recipeInfo.itemImage}
          />
        </div>
        <ul className={styles.buttonBox}>
          <li className={styles.foodName}>{recipeInfo.itemName}</li>
          <li>
            <Button
              className={styles.delete}
              onClick={() =>
                window.confirm("삭제하시겠습니까?") &&
                myRecipeDelete(recipeInfo.id)
              }
            >
              삭제
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RecipeCard;
