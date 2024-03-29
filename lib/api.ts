import axios from "axios";
import getUserToken from "../utils/getUserToken";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";
const API_URL = "https://api.mandarin.weniv.co.kr";

const baseInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const userToken = getUserToken();

// const user = useRecoilValue(isUserTokenAtom);

const authInstance = axios.create({
  headers: {
    Authorization: `Bearer ${userToken}`,
    "Content-Type": "application/json",
  },
});

export interface ICategoriesProps {
  setSelectCategory: any;
  categories?: ICategories[];
  categoriesLoading: boolean;
  categoriesError: boolean;
  categoriesErrorMessage: unknown;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICategories {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: number;
}

export interface ICategoriesMeals {
  idMeal?: string;
  strMeal?: string;
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
  idMeal?: string;
  strMeal: string;
  strMealThumb: string;
}

export interface IuserInterface {
  email: string;
  password: string;
  accountname?: string;
  username?: string;
}

export interface IproductInterface {
  itemName: string;
  price: number;
  link: string;
  itemImage: string;
}

export interface IrecipeListData {
  data: number;
  product: IrecipeProduct[];
}

export interface IrecipeProduct {
  id: string;
  itemName: string;
  price: number;
  link: string;
  itemImage: string;
}

export const getRandomFood = async () => {
  const res = await axios.get(`${BASE_URL}/random.php`);
  return res.data.meals[0];
};

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
  return res.data?.meals?.[0];
};

export const getSearchMeal = async ({ queryKey }: any) => {
  const res = await axios.get(`${BASE_URL}/search.php?s=${queryKey[1]}`);
  return res.data?.meals || null;
};

export const postEmailValid = async (userEmail: string) => {
  const reqData = {
    user: { email: userEmail },
  };
  const res = await baseInstance.post(`${API_URL}/user/emailvalid`, reqData);
  return res.data;
};

export const postAccountNameValid = async (accountname: string) => {
  const reqData = {
    user: { accountname },
  };
  const res = await baseInstance.post(
    `${API_URL}/user/accountnamevalid`,
    reqData
  );
  return res.data;
};

export const postJoinForm = async (user: IuserInterface) => {
  const res = await baseInstance.post(`${API_URL}/user`, { user });
  return res.data;
};

export const postLoginForm = async (user: IuserInterface) => {
  const res = await baseInstance.post(`${API_URL}/user/login`, { user });
  return res.data;
};

export const postRecipeForm = async (product: IproductInterface) => {
  const res = await authInstance.post(`${API_URL}/product`, { product });
  return res.data;
};

export const getRecipeList = async (accountname: string | null) => {
  const res = await authInstance.get(`${API_URL}/product/${accountname}`);
  return res.data;
};

export const postImageUpload = async (formImg: FormData) => {
  const {
    data: { filename },
  } = await axios.post(`${API_URL}/image/uploadfile`, formImg);
  return filename;
};

export const getMyRecipe = async (recipeId: string | null) => {
  const {
    data: { product },
  } = await authInstance.get(`${API_URL}/product/detail/${recipeId}`);
  return product;
};

export const apiDeleteMyRecipe = async (recipeId: string | null) => {
  const res = await authInstance.delete(`${API_URL}/product/${recipeId}`);
  return res;
};

export const apiUpdateMyRecipe = async ({
  id,
  product,
}: {
  id: string;
  product: IproductInterface;
}) => {
  const res = await authInstance.put(`${API_URL}/product/${id}`, {
    product,
  });
  return res;
};
