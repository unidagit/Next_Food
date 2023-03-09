"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Wrapper from "../../components/common/wrapper/Wrapper";
import RecipeForm from "../../containers/recipeForm/RecipeForm";
import RecipeListForm from "../../containers/recipeListForm/RecipeListForm";
import { isUserTokenAtom } from "../../provider/atom";

function RecipePage() {
  const router = useRouter();
  const [render, setRender] = useState();
  const user = useRecoilValue(isUserTokenAtom);

  useEffect(() => {
    setRender(user);
  }, [user]);

  useEffect(() => {
    if (!user) {
      alert("로그인을 해주세요");
      router.push("/signIn");
      return;
    }
  }, [user, router]);

  return (
    <Wrapper>
      {user && (
        <>
          <RecipeForm />
          <RecipeListForm />
        </>
      )}
    </Wrapper>
  );
}

export default RecipePage;
