"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import RecipeForm from "../../containers/recipeForm/RecipeForm";
import RecipeListForm from "../../containers/recipeListForm/RecipeListForm";

function RecipePage() {
  // const router = useRouter();
  // useEffect(() => {
  //   const result = localStorage.getItem("accountname");
  //   if (!result) {
  //     router.push("/signIn");
  //     alert("로그인을 해주세요");
  //   }
  // }, []);

  return (
    <Wrapper>
      <RecipeForm />
      <RecipeListForm />
    </Wrapper>
  );
}

export default RecipePage;
