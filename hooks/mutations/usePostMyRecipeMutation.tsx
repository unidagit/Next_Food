import { useMutation } from "@tanstack/react-query";
import {
  apiUpdateMyRecipe,
  IproductInterface,
  postRecipeForm,
} from "../../lib/api";

function usePostMyRecipeMutation() {
  return useMutation((product: IproductInterface) => postRecipeForm(product));
}

export default usePostMyRecipeMutation;
