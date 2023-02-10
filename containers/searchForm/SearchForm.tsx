"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import SingleMealCard from "../../components/cards/SingleMealCard/SingleMealCard";
import Loading from "../../components/loading/Loading";
import { getSearchMeal, IsearchMeal } from "../../lib/api";

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
  } = useQuery<IsearchMeal, Error>(["searchMeal", searchKey], getSearchMeal);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchKey !== "") {
        refetch();
        console.log(searchKey);
      } else {
        router.push("/");
        console.log("홈으로가야됭");
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
    <>
      {searchData ? (
        <>
          <SingleMealCard {...searchData} />
        </>
      ) : (
        <p>{searchKey}에 대한 검색결과가 없습니다</p>
      )}
    </>
  );
}

export default SearchForm;
