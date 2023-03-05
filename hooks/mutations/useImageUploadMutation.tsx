import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postImageUpload } from "../../lib/api";

export const useImageUploadMutation = () => {
  return useMutation((formImg: FormData) => postImageUpload(formImg));
};
