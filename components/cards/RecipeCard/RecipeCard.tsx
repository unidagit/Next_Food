import { useRouter } from "next/navigation";
import React from "react";
import useDeleteMyRecipeMutation from "../../../hooks/mutations/useDeleteMyRecipeMutation";

import { IrecipeProduct } from "../../../lib/api";
import { Button } from "../../buttons/Button";
import MealImage from "../../img/MealImage";
import styles from "./RecipeCard.module.css";

function RecipeCard({
  recipeInfo,
}: // handleClickDelete,
{
  recipeInfo: IrecipeProduct;
  // handleClickDelete: any;
}) {
  console.log(recipeInfo);
  const router = useRouter();

  const { mutate: myRecipeDelete } = useDeleteMyRecipeMutation();

  // const queryClient = useQueryClient();
  // const { mutate: myRecipeDeleteData } = useMutation(
  //   (recipeId: string | null) => deleteMyRecipe(recipeId),
  //   {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(["recipeListData", accountname]);
  //     },
  //   }
  // );

  const handleClickUpdate = () => {
    console.log("수정하기");
  };

  return (
    <>
      <div className={styles.recipeCardBox}>
        <div
          className={styles.imageBox}
          onClick={() => router.push(`/recipe/id?r=${recipeInfo.id}`)}
        >
          <MealImage imageAddress={recipeInfo.itemImage} />
        </div>
        <ul className={styles.buttonBox}>
          <li className={styles.foodName}>{recipeInfo.itemName}</li>
          <li>
            <Button onClick={handleClickUpdate}>수정</Button>
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
