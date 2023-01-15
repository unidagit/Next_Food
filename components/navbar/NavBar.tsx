import Link from "next/link";
import styles from "./NavBar.module.css";
import { titleFont } from "../../utils/fonts";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li className={styles.left}>
          <Link href="/">
            <p className={titleFont.className}>CookBook</p>
          </Link>
        </li>

        <li className={styles.right}>
          <Link className={styles.foodButton} href="/meals">
            Meals
          </Link>
          <Link href="/savedMeals">찜</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
