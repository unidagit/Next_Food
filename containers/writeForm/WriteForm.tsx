"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Wrapper from "../../components/common/wrapper/Wrapper";
import useInput from "../../hooks/useInput/useInput";
import useTextarea from "../../hooks/useInput/useTextarea";
import { IproductInterface, postRecipeForm } from "../../lib/api";

function WriteForm() {
  const router = useRouter();
  const [itemName, onChangeItemName] = useInput("");
  const [foodImage, onChangeFoodImage] = useInput("");
  const [level, onChangeLevel] = useInput("");
  const [recipeInfo, onChangeRecipeInfo] = useTextarea("");

  const { mutate: recipeFormData } = useMutation((product: IproductInterface) =>
    postRecipeForm(product)
  );

  const onSubmitRecipeForm = (e: React.FormEvent) => {
    e.preventDefault();

    const product = {
      itemName: itemName,
      price: Number(level),
      link: recipeInfo,
      itemImage: foodImage,
    };

    recipeFormData(product, {
      onSuccess: (data) => {
        router.push("/recipe");
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
    console.log(product);
  };

  return (
    <Wrapper>
      <form onSubmit={(e) => onSubmitRecipeForm(e)}>
        <div>
          <p>이미지 등록</p>
          <label htmlFor="foodImage">
            <input
              value={foodImage}
              name="foodImage"
              type="file"
              accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
              onChange={onChangeFoodImage}
            />
          </label>
        </div>

        <div>
          <label htmlFor="itemName">
            음식이름
            <input
              value={itemName}
              type="text"
              name="itemName"
              minLength={2}
              maxLength={14}
              placeholder="2 - 15자 이내여야 합니다"
              onChange={onChangeItemName}
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="level">
            난이도
            <input
              value={level}
              type="text"
              name="level"
              placeholder="1 - 5이내에 숫자만 입력해주세요"
              onChange={onChangeLevel}
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="recipeInfo">
            레시피 정보
            <textarea
              value={recipeInfo}
              name="recipeInfo"
              placeholder="상세한 레시피 정보를 알려주세요"
              onChange={onChangeRecipeInfo}
              required
            />
          </label>
        </div>

        <button>레시피 저장</button>
      </form>
    </Wrapper>
  );
}

export default WriteForm;
