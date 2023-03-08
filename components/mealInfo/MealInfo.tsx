import { IselectMeal } from "../../lib/api";
import MealMainInfo from "./MealMainInfo";
import styles from "./MealMainInfo.module.css";

function MealInfo({ data }: { data: IselectMeal }) {
  return (
    <div className={styles.wrapper}>
      <MealMainInfo data={data} />
      <p>{data?.strInstructions}</p>
    </div>
  );
}

export default MealInfo;
