import axios from "axios";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export interface ICategories {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: number;
}

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories.php`);
  return res.data.categories;
};
