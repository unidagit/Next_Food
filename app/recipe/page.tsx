function RecipePage() {
  return (
    <Wrapper>
      <RecipeForm />
      <RecipeListForm />
    </Wrapper>
  );
}

export default RecipePage;

import React from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import RecipeForm from "../../containers/recipeForm/RecipeForm";
import RecipeListForm from "../../containers/recipeListForm/RecipeListForm";
