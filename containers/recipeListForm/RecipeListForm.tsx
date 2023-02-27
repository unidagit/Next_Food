"use client";
import { useQuery } from "@tanstack/react-query";
import RecipeCard from "../../components/cards/RecipeCard/RecipeCard";
import { getRecipeList, IrecipeListData } from "../../lib/api";

function RecipeListForm() {
  const accountname =
    typeof window !== "undefined" ? localStorage.getItem("account") : null;

  console.log(accountname);

  const { data: recipeListData } = useQuery<IrecipeListData>(
    ["recipeListData", accountname],
    () => getRecipeList(accountname)
  );
  console.log(recipeListData);

  return (
    <>
      <strong>
        현재 {recipeListData?.data}개의 레시피가 기록되어 있습니다.
      </strong>

      {recipeListData &&
        recipeListData.product.map((recipe) => (
          <RecipeCard key={recipe.id} recipeInfo={recipe} />
        ))}
    </>
  );
}

export default RecipeListForm;
