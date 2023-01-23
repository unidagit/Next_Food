"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import MealCard from "../../components/cards/MealCard";
import Categories from "../../components/categories/Categories";
import Loading from "../../components/loading/Loading";
import styles from "./MealsPage.module.css";
// import SearchFood from "../../components/searchFood/SearchFood";
import {
  getCategories,
  getQueryMeals,
  ICategories,
  ICategoriesMeals,
} from "../../lib/api";

function MealsPage() {
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

  // if (categoriesLoading || categoriesQueryLoading) {
  //   return <Loading />;
  // } 함수라서

  return (
    <div>
      {/* <SearchFood /> */}
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
            <MealCard key={meal.idMeal} mealInfo={meal} />
          ))}
      </div>
    </div>
  );
}

export default MealsPage;
