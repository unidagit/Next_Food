"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import MealCard from "../../components/cards/MealCard";
import Categories from "../../components/categories/Categories";
import Loading from "../../components/loading/Loading";
import SearchFood from "../../components/searchFood/SearchFood";
import {
  getCategories,
  getQueryMeals,
  getSearchMeal,
  ICategories,
  ICategoriesMeals,
  IsearchMeal,
} from "../../lib/api";

import styles from "./MealsForm.module.css";

function MealsForm() {
  const [selectCategory, setSelectCategory] = useState("");
  //categories 리액트쿼리로 데이터 가져와서 버튼만들기
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");

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
    getQueryMeals,
    { enabled: !query }
  );

  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
    error: searchErrorMessage,
  } = useQuery<IsearchMeal[], Error>(["searchMeal", query], getSearchMeal, {
    enabled: !!query,
  });

  //접속했을때 첫번쨰 버튼 카테고리아이템 띄워주기
  useEffect(() => {
    if (categories) {
      setSelectCategory(categories[0].strCategory);
      setSelectCategory("");
    }
  }, [categories]);

  //3초후 검색창 실행
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText) {
        setQuery(searchText);
        setSelectCategory("");
      } else {
        setQuery("");
        if (categories) {
          setSelectCategory(categories[0].strCategory);
        }
      }
    }, 300);
    return () => {
      setQuery("");
      clearTimeout(timeout);
    };
  }, [searchText, categories]);

  if (searchError) {
    return <>Error:{searchErrorMessage}</>;
  }

  return (
    <div>
      <SearchFood searchText={searchText} setSearchText={setSearchText} />
      <Categories
        setSelectCategory={setSelectCategory}
        categories={categories}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
        categoriesErrorMessage={categoriesErrorMessage}
        setQuery={setQuery}
      />

      {(categoriesLoading || categoriesQueryLoading) && <Loading />}

      <div className={styles.itemContainer}>
        {categoriesQueryData &&
          categoriesQueryData.map((meal) => (
            <div key={meal.idMeal} className={styles.box}>
              <MealCard key={meal.idMeal} mealInfo={meal} />
            </div>
          ))}

        {!searchLoading &&
          searchData &&
          searchData.map((meal) => (
            <div key={meal.idMeal} className={styles.box}>
              <MealCard key={meal.idMeal} mealInfo={meal} />
            </div>
          ))}

        {searchData === null && <p>{searchText}에 대한 검색결과가 없습니다</p>}
      </div>
    </div>
  );
}

export default MealsForm;
