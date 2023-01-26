import { IselectMeal } from "../../lib/api";
import { ButtonLink } from "../buttons/Button";
import MealImage from "../img/MealImage";
import Loading from "../loading/Loading";
import styles from "./MealInfo.module.css";
import MealMainInfo from "./MealMainInfo";

// import MealMainInfo from "./MealMainInfo";
// import MealNutrient from "./MealNutrient";
// import MealRecipe from "./MealRecipe";

function MealInfo({ data }: { data: IselectMeal }) {
  console.log(data);

  return (
    <div className={styles.wrapper}>
      <MealMainInfo data={data} />
      <p>{data?.strInstructions}</p>
    </div>
  );
}

export default MealInfo;
