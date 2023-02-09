"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import MealCard from "../components/cards/MealCard";
import Categories from "../components/categories/Categories";
import Loading from "../components/loading/Loading";
import {
  getCategories,
  getQueryMeals,
  ICategories,
  ICategoriesMeals,
} from "../lib/api";
import styles from "./MealsPage.module.css";

function MealsForm() {
  const [selectCategory, setSelectCategory] = useState("");
  //categories 리액트쿼리로 데이터 가져와서 버튼만들기
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
    error: categoriesErrorMessage,
  } = useQuery<ICategories[]>(["categories"], getCategories);
  // console.log(selectCategory);

  // 카테고리 버튼 클릭 후 해당음식 리스트 보여주기
  const {
    data: categoriesQueryData,
    isLoading: categoriesQueryLoading,
    isError: categoriesQueryError,
    error: categoriesQueryErrorMessage,
  } = useQuery<ICategoriesMeals[]>(
    ["categoriesMeals", selectCategory],
    getQueryMeals
  );

  //접속했을때 첫번쨰 버튼 카테고리아이템 띄워주기
  useEffect(() => {
    if (categories) {
      setSelectCategory(categories[0].strCategory);
    }
  }, [categories]);

  return (
    <div>
      <Categories
        setSelectCategory={setSelectCategory}
        categories={categories}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
        categoriesErrorMessage={categoriesErrorMessage}
      />

      {(categoriesLoading || categoriesQueryLoading) && <Loading />}

      <div className={styles.itemContainer}>
        {categoriesQueryData &&
          categoriesQueryData.map((meal) => (
            <div key={meal.idMeal} className={styles.box}>
              <MealCard key={meal.idMeal} mealInfo={meal} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default MealsForm;
