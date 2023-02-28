"use client";
import { useRouter } from "next/navigation";
import { ButtonLink } from "../../components/buttons/Button";
import styles from "./RecipeForm.module.css";

function RecipeForm() {
  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("account") : null;

  if (!token) {
    alert("로그인을 해주세요.");
    router.push("/signIn");
  }

  return (
    <div className={styles.wrtieButton}>
      <ButtonLink link="/write">레시피 글쓰기</ButtonLink>
    </div>
  );
}

export default RecipeForm;
