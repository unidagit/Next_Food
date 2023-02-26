"use client";
import Link from "next/link";
import Wrapper from "../../components/common/wrapper/Wrapper";
import RecipeListForm from "../../containers/recipeListForm/RecipeListForm";

function RecipePage() {
  return (
    <>
      <Wrapper>
        <Link href="/write">레시피 글쓰기</Link>
        <RecipeListForm />
      </Wrapper>
    </>
  );
}

export default RecipePage;
