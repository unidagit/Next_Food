import { useQuery } from "@tanstack/react-query";
import { getRandomFood, ICategoriesMeals } from "../../lib/api";

function useGetRandomFoodQuery() {
  return useQuery<ICategoriesMeals>(["randomFood"], getRandomFood);
}

export default useGetRandomFoodQuery;
