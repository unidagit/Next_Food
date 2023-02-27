"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Wrapper from "../../components/common/wrapper/Wrapper";
import RecipeListForm from "../../containers/recipeListForm/RecipeListForm";

function RecipePage() {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("account") : null;

  if (!token) {
    alert("로그인을 해주세요.");
    router.push("/signIn");
  }

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
