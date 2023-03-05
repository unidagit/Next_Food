import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { REACT_QUERY_KEY } from "../../common/constants";
import { apiUpdateMyRecipe, IproductInterface } from "../../lib/api";
import getUserAccountname from "../../utils/getUserAccountname";

function useUpdateMyRecipeMutation() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const accountname = getUserAccountname();

  const updateMyRecipe = ({
    product,
    id,
  }: {
    product: IproductInterface;
    id: string;
  }) => apiUpdateMyRecipe({ product, id });

  const successUpdateMyRecipe = () => {
    queryClient.invalidateQueries([REACT_QUERY_KEY.GET_RECIPE, accountname]);
    router.push("/recipe");
    alert("수정 되었습니다");
  };

  const mutation = useMutation({
    mutationFn: updateMyRecipe,
    onSuccess: successUpdateMyRecipe,
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
}

export default useUpdateMyRecipeMutation;
