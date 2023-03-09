import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { REACT_QUERY_KEY } from "../../common/constants";
import { apiDeleteMyRecipe } from "../../lib/api";
import { isUserAccountAtom } from "../../provider/atom";

function useDeleteMyRecipeMutation() {
  const queryClient = useQueryClient();
  const accountname = useRecoilValue(isUserAccountAtom);

  const deleteMyRecipe = (recipeId: string) => {
    return apiDeleteMyRecipe(recipeId);
  };

  const successDeleteMyRecipe = () => {
    queryClient.invalidateQueries([REACT_QUERY_KEY.GET_RECIPE, accountname]);
    alert("삭제 되었습니다");
  };

  const mutation = useMutation({
    mutationFn: deleteMyRecipe,
    onSuccess: successDeleteMyRecipe,
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
}

export default useDeleteMyRecipeMutation;
