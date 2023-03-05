"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import useGetMyRecipeDetailQuery from "../../hooks/queries/useGetMyRecipeDetailQuery";
import WriteForm from "../writeForm/WriteForm";

function EditorForm() {
  const editorParams = useSearchParams();
  const editoerId = editorParams.get("e");

  const {
    data: myRecipeData,
    isLoading,
    isError,
    error,
  } = useGetMyRecipeDetailQuery(editoerId);

  return <WriteForm {...myRecipeData} />;
}

export default EditorForm;
