import React from "react";
import { ICategoriesProps } from "../../lib/api";
import Loading from "../loading/Loading";
import styles from "./Categories.module.css";
import CategoryItem from "./CategoryItem";

function Categories({
  setSelectCategory,
  categories,
  categoriesLoading,
  categoriesError,
  categoriesErrorMessage,
  setQuery,
}: ICategoriesProps) {
  if (categoriesLoading) {
    return <Loading />;
  }

  if (categoriesError) {
    return <>Error:{categoriesErrorMessage}</>;
  }

  return (
    <div className={styles.categoriesContainer}>
      {categories &&
        categories.map((item) => (
          <CategoryItem
            key={item.idCategory}
            category={item}
            onClickHandler={() => {
              setSelectCategory(item.strCategory);
              setQuery("");
            }}
          />
        ))}
    </div>
  );
}

export default Categories;
