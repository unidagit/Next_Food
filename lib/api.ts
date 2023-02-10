import axios from "axios";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export interface ICategoriesProps {
  setSelectCategory: any;
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

export interface ICategoriesMeals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface IselectMeal {
  idMeal: string;
  strArea: string;
  strCategory: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strTags: string | null;
  strYoutube: string;
}

export interface IsearchMeal {
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
  return res.data?.meals;
};

export const getSelectMeal = async ({ queryKey }: any) => {
  const res = await axios.get(`${BASE_URL}/lookup.php?i=${queryKey[1]}`);
  console.log(res);
  return res.data?.meals?.[0];
};

export const getSearchMeal = async ({ queryKey }: any) => {
  const res = await axios.get(`${BASE_URL}/search.php?s=${queryKey[1]}`);
  console.log(res);
  return res.data?.meals[0] || null;
};
