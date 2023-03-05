import React from "react";
import MealImage from "../img/MealImage";
import { SmallText } from "../text/Text";
import styles from "./ImgUploadBox.module.css";

function ImgUploadBox({
  handleOpenFile,
  imgFile,
  fileUploadBtn,
  handleChangeFoodImage,
}: any) {
  return (
    <div className={styles.imgWrapper}>
      <SmallText>이미지 수정</SmallText>
      <div onClick={handleOpenFile}>
        <MealImage imageAddress={imgFile} />
      </div>
      <input
        className={styles.hidden}
        ref={fileUploadBtn}
        name="foodImage"
        type="file"
        accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
        onChange={handleChangeFoodImage}
      />
    </div>
  );
}

export default ImgUploadBox;
