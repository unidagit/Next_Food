import React from "react";
import { IselectMeal } from "../../lib/api";
import MealImage from "../img/MealImage";
import styles from "./MealMainInfo.module.css";

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
              <li className={styles.mealInfoItem}>
                <p className={styles.mealInfoItemName}>Area</p>
                <p>{data?.strArea}</p>
              </li>
              <li className={styles.mealInfoItem}>
                <p className={styles.mealInfoItemName}>Cook time</p>
                <p>20 Mins</p>
              </li>
            </ul>

            <button className={styles.mealInfoBtnPlay} type="button">
              Play
            </button>
            <button className={styles.mealInfoBtnLike} type="button">
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealMainInfo;
