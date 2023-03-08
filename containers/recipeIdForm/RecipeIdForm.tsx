"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { Button } from "../../components/buttons/Button";
import Wrapper from "../../components/common/wrapper/Wrapper";
import MealImage from "../../components/img/MealImage";
import ImgUploadBox from "../../components/imgUploadBox/ImgUploadBox";
import Input from "../../components/input/Input";
import { LabelText, SmallInfoText } from "../../components/text/Text";
import Textarea from "../../components/textarea/Textarea";
import { useImageUploadMutation } from "../../hooks/mutations/useImageUploadMutation";
import useUpdateMyRecipeMutation from "../../hooks/mutations/useUpdateMyRecipeMutation";
import useInput from "../../hooks/useInput/useInput";
import useTextarea from "../../hooks/useInput/useTextarea";
import { IrecipeProduct } from "../../lib/api";
import styles from "./RecipeIdForm.module.css";

function RecipeIdForm({
  itemName,
  price,
  link,
  itemImage,
  id,
}: IrecipeProduct) {
  const router = useRouter();
  const fileUploadBtn = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [localName, handleEditName] = useInput(itemName);
  const [localNumber, handleEditNumber] = useInput(`${price}`);
  const [localInfo, handleEditInfo] = useTextarea(link);
  const [targetfile, setTargetfile] = useState<File | null>(null);
  const [imgFile, setImgFile] = useState(itemImage);

  const [targetImg, setTargetImg] = useState("");

  const { mutate: imageUploadData } = useImageUploadMutation();

  const { mutate: updateData } = useUpdateMyRecipeMutation();

  //수정하기 함수
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
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

        const formImg = new FormData();
        formImg.append("image", file);

        imageUploadData(formImg, {
          onSuccess: (filename) => {
            setTargetImg(`https://mandarin.api.weniv.co.kr/${filename}`);
          },
        });
      }

      reader.onloadend = () => {
        const previewImgUrl = reader.result;
        // console.log(previewImgUrl); base64 인코딩 완료

        if (typeof previewImgUrl === "string") {
          setImgFile(previewImgUrl);
        }
      };
    },
    [imageUploadData]
  );

  const onSubmitRecipeForm = (e: any) => {
    e.preventDefault();

    console.log(targetfile);
    console.log(e.target.foodImage.files);

    // if (!!targetfile) {

    const product = {
      itemName: localName,
      price: Number(localNumber),
      link: localInfo,
      itemImage: targetfile ? targetImg : itemImage,
    };
    updateData({ product, id });

    // }
  };

  return (
    <Wrapper>
      <form className={styles.formBox} onSubmit={onSubmitRecipeForm}>
        <div>
          {isEdit ? (
            <div>
              <ImgUploadBox
                handleOpenFile={handleOpenFile}
                imgFile={imgFile}
                fileUploadBtn={fileUploadBtn}
                handleChangeFoodImage={handleChangeFoodImage}
              />
            </div>
          ) : (
            <MealImage imageAddress={itemImage} />
          )}
        </div>
        <>
          {isEdit ? (
            <div>
              <LabelText htmlFor="itemImgName">음식이름</LabelText>
              <Input
                name="itemImgName"
                value={localName}
                minLength="2"
                maxLength="14"
                placeholder="2 - 15자 이내여야 합니다"
                onChange={handleEditName}
              />
            </div>
          ) : (
            <div>
              <SmallInfoText>음식이름</SmallInfoText>
              <p>{itemName}</p>
            </div>
          )}

          {isEdit ? (
            <div>
              <LabelText htmlFor="localNumber">난이도</LabelText>
              <Input
                name="localNumber"
                value={localNumber}
                minLength="1"
                maxLength="1"
                placeholder="1 - 5이내에 숫자만 입력해주세요"
                onChange={handleEditNumber}
              />
            </div>
          ) : (
            <div>
              <SmallInfoText>난이도</SmallInfoText>
              <p>{price}</p>
            </div>
          )}

          {isEdit ? (
            <div>
              <LabelText htmlFor="recipeInfo">레시피</LabelText>
              <Textarea
                name="recipeInfo"
                value={localInfo}
                minLength="1"
                placeholder="상세한 레시피 정보를 알려주세요"
                onChange={handleEditInfo}
              ></Textarea>
            </div>
          ) : (
            <div>
              <SmallInfoText>레시피 정보</SmallInfoText>
              <p>{link}</p>
            </div>
          )}
        </>
        {isEdit ? (
          <div className={styles.saveBox}>
            <Button>수정 완료</Button>
          </div>
        ) : (
          <div className={styles.saveBox}>
            <div onClick={toggleIsEdit}>수정하기</div>
          </div>
        )}
      </form>
    </Wrapper>
  );
}

export default RecipeIdForm;
