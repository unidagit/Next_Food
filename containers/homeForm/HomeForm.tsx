import Banner from "../../components/banner/Banner";
import styles from "./HomeForm.module.css";

export default function HomeForm() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bannerContainer}>
          <Banner />
        </div>
        <div className={styles.foodContainer}>
          <h2>오늘은 이 메뉴 어떠세요?</h2>
        </div>
      </div>
    </>
  );
}
