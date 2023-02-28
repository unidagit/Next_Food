"use client";
import { ButtonLink } from "../../components/buttons/Button";
import styles from "./RecipeForm.module.css";

function RecipeForm() {
  return (
    <div className={styles.wrtieButton}>
      <ButtonLink link="/write">레시피 글쓰기</ButtonLink>
    </div>
  );
}

export default RecipeForm;
