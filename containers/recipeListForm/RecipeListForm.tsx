"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getRecipeList, IrecipeListData } from "../../lib/api";

function RecipeListForm() {
  const [accountname, setAccountname] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("account");
    if (!!username) {
      setAccountname(username);
    }
  }, []);

  console.log(accountname);

  const { data: recipeListData } = useQuery<IrecipeListData>(
    ["recipeListData", accountname],
    () => getRecipeList(accountname)
  );
  console.log(recipeListData);

  return (
    <>
      <strong>
        현재 {recipeListData?.data}개의 레시피가 기록되어 있습니다.
      </strong>

      {recipeListData &&
        recipeListData.product.map((it) => <h2 key={it.id}>{it.itemName}</h2>)}
    </>
  );
}

export default RecipeListForm;
