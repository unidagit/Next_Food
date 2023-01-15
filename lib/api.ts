import axios from "axios";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export interface ICategoriesProps {
  setSelectCategory?: any;
  categories?: ICategories[];
  categoriesLoading: boolean;
  categoriesError: boolean;
  categoriesErrorMessage: unknown;
}

export interface ICategories {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: number;
}

export interface ICategoriesQuery {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories.php`);
  return res.data.categories;
};

export const getQueryMeals = async ({ queryKey }: any) => {
  const res = await axios.get(`${BASE_URL}/filter.php?c=${queryKey[1]}`);
  console.log(res);
  return res.data?.meals;
};
