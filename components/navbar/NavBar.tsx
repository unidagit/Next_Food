import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Logo from "../../images/LogoOrange.svg";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li className={styles.left}>
          <Link href="/">
            <Image src={Logo} alt="logo" width={120} />
          </Link>
        </li>

        <li className={styles.right}>
          <Link className={styles.foodButton} href="/recipe">
            <p className={styles.mealsText}>Recipe</p>
          </Link>
          <Link className={styles.foodButton} href="/meals">
            <p className={styles.mealsText}>Meals</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
