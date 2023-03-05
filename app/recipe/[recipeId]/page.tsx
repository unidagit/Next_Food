"use client";
import { useSearchParams } from "next/navigation";
// import Loading from "../../../components/loading/Loading";
import RecipeIdForm from "../../../containers/recipeIdForm/RecipeIdForm";
import useGetMyRecipeDetailQuery from "../../../hooks/queries/useGetMyRecipeDetailQuery";

function RecipeDetailpage() {
  const recipeParams = useSearchParams();
  const recipeId = recipeParams.get("r");
  const {
    data: myRecipeData,
    // isLoading,
    // isError,
    // error,
  } = useGetMyRecipeDetailQuery(recipeId);

  // if (isLoading || !myRecipeData) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return console.log(error);
  // }

  return (
    <>
      {myRecipeData && recipeId && (
        <RecipeIdForm
          itemName={myRecipeData.itemName}
          price={myRecipeData.price}
          link={myRecipeData.link}
          itemImage={myRecipeData.itemImage}
          id={recipeId}
        />
      )}
    </>
  );
}

export default RecipeDetailpage;
