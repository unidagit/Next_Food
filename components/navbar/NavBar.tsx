import Link from "next/link";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li className={styles.left}>
          <Link href="/">BookHome</Link>
        </li>

        <li className={styles.center}>
          <input
            className={styles.searchInput}
            placeholder={"책을 검색해보세요!"}
          />
          {/* <img imgSrc={search} width="28px" height="28px" /> */}
        </li>

        <li className={styles.right}>
          <Link className={styles.loginButton} href="/user">
            로그인
          </Link>
          <Link href="/carts">장바구니</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
