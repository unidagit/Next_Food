"use client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import Wrapper from "../../components/common/wrapper/Wrapper";
import useInput from "../../hooks/useInput/useInput";
import useTextarea from "../../hooks/useInput/useTextarea";
import {
  IproductInterface,
  postImageUpload,
  postRecipeForm,
} from "../../lib/api";
import styles from "./WriteForm.module.css";
import food1 from "../../images/food1.jpg";

function WriteForm() {
  const fileUploadBtn = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [itemName, onChangeItemName] = useInput("");
  const [level, onChangeLevel] = useInput("");
  const [recipeInfo, onChangeRecipeInfo] = useTextarea("");
  const [imgFile, setImgFile] = useState("");
  const [targetfile, setTargetfile] = useState<File | null>(null);

  const { mutate: recipeFormData } = useMutation((product: IproductInterface) =>
    postRecipeForm(product)
  );

  const { mutate: imageUploadData } = useMutation((formImg: FormData) =>
    postImageUpload(formImg)
  );

  const onSubmitRecipeForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!!targetfile) {
      const formImg = new FormData();
      formImg.append("image", targetfile);

      imageUploadData(formImg, {
        onSuccess: (filename) => {
          const product = {
            itemName: itemName,
            price: Number(level),
            link: recipeInfo,
            itemImage: `https://mandarin.api.weniv.co.kr/${filename}`,
          };

          recipeFormData(product, {
            onSuccess: (data) => {
              router.push("/recipe");
              console.log(data.product);
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

  //이미지 파일 base64로 변환
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
      <form onSubmit={onSubmitRecipeForm}>
        <div>
          <p>이미지 등록</p>
          <Image
            src={imgFile ? imgFile : food1}
            alt="레시피 이미지"
            width={50}
            height={50}
          />
          <label htmlFor="foodImage">
            <div>
              <button onClick={handleOpenFile}>+</button>
            </div>
            <input
              className={styles.hidden}
              ref={fileUploadBtn}
              name="foodImage"
              type="file"
              accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
              onChange={handleChangeFoodImage}
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
