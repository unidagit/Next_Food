"use client";
import RecipeCard from "../../components/cards/RecipeCard/RecipeCard";
import useGetMyRecipeQuery from "../../hooks/queries/useGetMyRecipeQuery";
import styles from "./RecipeListForm.module.css";

function RecipeListForm() {
  const accountname =
    typeof window !== "undefined" ? localStorage.getItem("account") : null;
  const {
    data: recipeListData,
    isLoading,
    isError,
    error,
  } = useGetMyRecipeQuery(accountname);

  return (
    <>
      <strong>
        현재 {recipeListData?.data}개의 레시피가 기록되어 있습니다.
      </strong>

      <div className={styles.container}>
        {recipeListData &&
          recipeListData.product.map((recipe) => (
            <RecipeCard key={recipe.id} recipeInfo={recipe} />
          ))}
      </div>
    </>
  );
}

export default RecipeListForm;
