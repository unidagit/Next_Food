import Banner from "../../components/banner/Banner";
import RandomFood from "../../components/randomFood/RandomFood";

import styles from "./HomeForm.module.css";

export default function HomeForm() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bannerContainer}>
          <Banner />
        </div>
        <div className={styles.foodContainer}>
          <RandomFood />
        </div>
      </div>
    </>
  );
}
