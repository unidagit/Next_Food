import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REACT_QUERY_KEY } from "../../common/constants";
import { apiDeleteMyRecipe } from "../../lib/api";
import getUserAccountname from "../../utils/getUserAccountname";

function useDeleteMyRecipeMutation() {
  const queryClient = useQueryClient();
  const accountname = getUserAccountname();

  const deleteMyRecipe = (recipeId: string) => {
    return apiDeleteMyRecipe(recipeId);
  };

  const updateMyRecipe = () => {
    queryClient.invalidateQueries([REACT_QUERY_KEY.GET_RECIPE, accountname]);
    alert("삭제 되었습니다");
  };

  const mutation = useMutation({
    mutationFn: deleteMyRecipe,
    onSuccess: updateMyRecipe,
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
}

export default useDeleteMyRecipeMutation;
