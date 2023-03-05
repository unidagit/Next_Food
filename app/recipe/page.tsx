"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import RecipeForm from "../../containers/recipeForm/RecipeForm";
import RecipeListForm from "../../containers/recipeListForm/RecipeListForm";
import getUserAccountname from "../../utils/getUserAccountname";

function RecipePage() {
  // const [account, setAccount] = useState("");
  // const router = useRouter();
  // const accountname = getUserAccountname();

  // const [usesrData, setUserData] = useState("");

  // const userAccountname =
  //   typeof window !== "undefined" ? localStorage.getItem("accountname") : null;

  // useEffect(() => {
  //   if (userAccountname) {
  //     setUserData(userAccountname);
  //   } else {
  //     alert("로그인해");
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
