"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import useInput from "../../hooks/useInput/useInput";
import useTextarea from "../../hooks/useInput/useTextarea";
import styles from "./WriteForm.module.css";
import { useImageUploadMutation } from "../../hooks/mutations/useImageUploadMutation";
import usePostMyRecipeMutation from "../../hooks/mutations/usePostMyRecipeMutation";
import MealImage from "../../components/img/MealImage";

import { LabelText, SmallText } from "../../components/text/Text";
import Input from "../../components/input/Input";
import { Button } from "../../components/buttons/Button";
import Textarea from "../../components/textarea/Textarea";
import upload from "../../images/upload.jpg";

function WriteForm() {
  const fileUploadBtn = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [itemImgName, onChangeItemImgName] = useInput("");
  const [level, onChangeLevel] = useInput("");
  const [recipeInfo, onChangeRecipeInfo] = useTextarea("");
  const [imgFile, setImgFile] = useState("");
  const [targetfile, setTargetfile] = useState<File | null>(null);

  //이미지 post
  const { mutate: imageUploadData } = useImageUploadMutation();
  const { mutate: recipeFormData } = usePostMyRecipeMutation();

  const onSubmitRecipeForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!!targetfile) {
      const formImg = new FormData();
      formImg.append("image", targetfile);

      imageUploadData(formImg, {
        onSuccess: (filename) => {
          const product = {
            itemName: itemImgName,
            price: Number(level),
            link: recipeInfo,
            itemImage: `https://mandarin.api.weniv.co.kr/${filename}`,
          };

          recipeFormData(product, {
            onSuccess: (data) => {
              router.push("/recipe");
            },
            onError: (error) => {
              console.log(error);
            },
          });
        },
      });
    }
  };

  //이미지 미리보기
  const handleOpenFile = useCallback(() => {
    fileUploadBtn?.current?.click();
  }, []);

  // 이미지 파일 base64로 변환
  const handleChangeFoodImage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const reader = new FileReader();
      const file = (e.currentTarget.files as FileList)[0];

      setTargetfile(file);

      if (!!file) {
        reader.readAsDataURL(file);
        e.target.value = "";
      }

      reader.onloadend = () => {
        const previewImgUrl = reader.result;
        // console.log(previewImgUrl); base64 인코딩 완료

        if (typeof previewImgUrl === "string") {
          setImgFile(previewImgUrl);
        }
      };
    },
    []
  );

  return (
    <Wrapper>
      <form className={styles.formBox} onSubmit={onSubmitRecipeForm}>
        <div onClick={handleOpenFile}>
          <LabelText htmlFor="image">이미지 등록</LabelText>
          <MealImage imageAddress={imgFile} />
        </div>
        <LabelText htmlFor="foodImage">
          <input
            className={styles.hidden}
            ref={fileUploadBtn}
            name="foodImage"
            type="file"
            accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
            onChange={handleChangeFoodImage}
            // required
          />
        </LabelText>

        <div>
          <LabelText htmlFor="itemImgName">음식이름</LabelText>
          <Input
            name="itemImgName"
            value={itemImgName}
            minLength="2"
            maxLength="14"
            placeholder="2 - 15자 이내여야 합니다"
            onChange={onChangeItemImgName}
          />
        </div>

        <div>
          <LabelText htmlFor="level">난이도</LabelText>
          <Input
            name="level"
            value={level}
            minLength="1"
            maxLength="1"
            placeholder="1 - 5이내에 숫자만 입력해주세요"
            onChange={onChangeLevel}
          />
        </div>

        <div>
          <LabelText htmlFor="recipeInfo">레시피 정보</LabelText>
          <Textarea
            name="recipeInfo"
            value={recipeInfo}
            minLength="1"
            placeholder="상세한 레시피 정보를 알려주세요"
            onChange={onChangeRecipeInfo}
          />
        </div>

        <Button>레시피 저장</Button>
      </form>
    </Wrapper>
  );
}

export default WriteForm;
