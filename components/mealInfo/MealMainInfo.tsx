import Image from "next/image";
import React from "react";
import { IselectMeal } from "../../lib/api";
import MealImage from "../img/MealImage";
import styles from "./MealMainInfo.module.css";
import PlayButton from "../../images/playbutton.svg";
import { ButtonLink } from "../buttons/Button";

function MealMainInfo({ data }: { data: IselectMeal }) {
  return (
    <div>
      <div className={styles.topContainer}>
        <div className={styles.mealImageContainer}>
          <MealImage imageAddress={data?.strMealThumb} />
        </div>

        <div className={styles.info}>
          <h2 className={styles.mealName}>{data?.strMeal}</h2>
          <div className={styles.mealInfoListBox}>
            <ul className={styles.mealInfoList}>
              <li className={styles.mealInfoItem}>
                <p className={styles.mealInfoItemName}>Category</p>
                <p>{data?.strCategory}</p>
              </li>
              <div className={styles.line}></div>
              <li className={styles.mealInfoItem}>
                <p className={styles.mealInfoItemName}>Area</p>

                <p>{data?.strArea}</p>
              </li>
              <div className={styles.line}></div>
              <li className={styles.mealInfoItem}>
                <p className={styles.mealInfoItemName}>Cook time</p>
                <p>20 Mins</p>
              </li>
            </ul>

            <ButtonLink
              className={styles.mealInfoBtnPlay}
              link={data?.strYoutube}
            >
              <Image src={PlayButton} alt="play" width={14} />
              <p>Play</p>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealMainInfo;
