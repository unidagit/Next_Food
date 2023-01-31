import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Logo from "../../images/LogoOrange.svg";
import Like from "../../images/like.svg";
import ThemeModeButton from "../themeModeButton/ThemeModeButton";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li className={styles.left}>
          <Link href="/">
            <Image src={Logo} alt="logo" width={140} />
          </Link>
        </li>

        <li className={styles.right}>
          <Link className={styles.foodButton} href="/meals">
            <p className={styles.mealsText}>Meals</p>
          </Link>
          <Link className={styles.foodButton} href="/savedMeals">
            <Image
              className={styles.likeButton}
              src={Like}
              alt="save"
              width={25}
            />
          </Link>
          {/* <Link className={styles.foodButton} href="/recipe">
            My Recipe
          </Link> */}
          <ThemeModeButton></ThemeModeButton>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
