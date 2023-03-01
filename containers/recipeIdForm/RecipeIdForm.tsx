"use client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import MealImage from "../../components/img/MealImage";
import Loading from "../../components/loading/Loading";
import { getMyRecipe, IrecipeProduct } from "../../lib/api";
import styles from "./RecipeIdForm.module.css";

function RecipeIdForm() {
  const recipeParams = useSearchParams();
  const recipeId = recipeParams.get("r");

  const {
    data: myRecipeData,
    isLoading,
    isError,
    error,
  } = useQuery<IrecipeProduct, Error>(["myRecipe", recipeId], () =>
    getMyRecipe(recipeId)
  );

  if (isLoading || !myRecipeData) {
    return <Loading />;
  }

  if (isError) {
    return <>{error.message}</>;
  }

  return (
    <Wrapper>
      <div className={styles.imageBox}>
        <MealImage imageAddress={myRecipeData.itemImage} />
      </div>
      <div>
        <h2>{myRecipeData.itemName}</h2>
        <p>난이도: {myRecipeData.price}</p>
        <p>{myRecipeData.link}</p>
      </div>
    </Wrapper>
  );
}

export default RecipeIdForm;
