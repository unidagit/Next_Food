"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSearchParams } from "next/navigation";
import { getSelectMeal, IselectMeal } from "../../../lib/api";
import MealInfo from "../../../components/mealInfo/MealInfo";
import Loading from "../../../components/loading/Loading";

function MealsDetailPage() {
  const searchParams = useSearchParams();
  const mealId = searchParams.get("q");
  console.log(mealId);

  const { data, isLoading, isError, error } = useQuery<IselectMeal, Error>(
    ["selectMeal", mealId],
    getSelectMeal
  );
  console.log(data);

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

export default MealsDetailPage;
