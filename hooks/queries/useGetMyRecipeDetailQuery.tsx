import { useQuery } from "@tanstack/react-query";
import React from "react";
import { REACT_QUERY_KEY } from "../../common/constants";
import { getMyRecipe } from "../../lib/api";

function useGetMyRecipeDetailQuery(recipeId: string | null) {
  return useQuery([REACT_QUERY_KEY.GET_RECIPE, recipeId], () =>
    getMyRecipe(recipeId)
  );
}

export default useGetMyRecipeDetailQuery;
