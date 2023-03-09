"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getSelectMeal, IselectMeal } from "../../lib/api";
import Loading from "../../components/loading/Loading";
import MealInfo from "../../components/mealInfo/MealInfo";

function MealsIdForm() {
  const searchParams = useSearchParams();
  const mealId = searchParams.get("q");

  const { data, isLoading, isError, error } = useQuery<IselectMeal, Error>(
    ["selectMeal", mealId],
    getSelectMeal,
    {
      retry: 0,
    }
  );

  if (isLoading || !data) {
    return <Loading />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <MealInfo data={data} />
    </>
  );
}

export default MealsIdForm;
