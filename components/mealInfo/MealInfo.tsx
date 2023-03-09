import { IselectMeal } from "../../lib/api";
import Wrapper from "../common/wrapper/Wrapper";
import MealMainInfo from "./MealMainInfo";
import styles from "./MealMainInfo.module.css";

function MealInfo({ data }: { data: IselectMeal }) {
  return (
    <Wrapper>
      <MealMainInfo data={data} />
      <p>{data?.strInstructions}</p>
    </Wrapper>
  );
}

export default MealInfo;
