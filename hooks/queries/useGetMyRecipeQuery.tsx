import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEY } from "../../common/constants";
import { getRecipeList, IrecipeListData } from "../../lib/api";

function useGetMyRecipeQuery(accountname: string | null) {
  return useQuery<IrecipeListData>([REACT_QUERY_KEY.GET_RECIPE], () =>
    getRecipeList(accountname)
  );
}

export default useGetMyRecipeQuery;
