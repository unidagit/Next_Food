"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import SingleMealCard from "../../components/cards/SingleMealCard/SingleMealCard";
import Loading from "../../components/loading/Loading";
import { getSearchMeal, IsearchMeal } from "../../lib/api";
import styles from "./SearchForm.module.css";

function SearchForm() {
  const router = useRouter();
  const searchKeyParams = useSearchParams();
  const searchKey = searchKeyParams.get("s");

  const {
    data: searchData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<IsearchMeal[], Error>(["searchMeal", searchKey], getSearchMeal);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchKey !== "") {
        refetch();
      } else {
        router.push("/");
      }
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchKey, router, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <>{error.message}</>;
  }

  return (
    <div className={styles.wrapper}>
      {searchData &&
        searchData.map((meal) => (
          <div key={meal.idMeal} className={styles.box}>
            <SingleMealCard
              idMeal={meal.idMeal}
              strMealThumb={meal.strMealThumb}
              strMeal={meal.strMeal}
            />
          </div>
        ))}
      {searchData === null && <p>{searchKey}에 대한 검색결과가 없습니다</p>}
    </div>
  );
}

export default SearchForm;
