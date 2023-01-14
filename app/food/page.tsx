"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Categories from "../../components/categories/Categories";
import SearchFood from "../../components/searchFood/SearchFood";
import { getCategories, ICategories } from "../../lib/api";

function SearchFoodPage() {
  const [select, setSelect] = useState("");
  //categories 리액트쿼리로 데이터 가져와서 버튼만들기
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
    error: categoriesErrorMessage,
  } = useQuery<ICategories[]>(["categories"], getCategories);
  console.log(select);

  return (
    <div>
      {/* <SearchFood /> */}
      <Categories
        setSelect={setSelect}
        categories={categories}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
        categoriesErrorMessage={categoriesErrorMessage}
      />
    </div>
  );
}

export default SearchFoodPage;
