import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./TopBar.module.css";

function TopBar() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li>
          <Link className={styles.foodButton} href="/signUp">
            <p className={styles.joinText}>회원가입</p>
          </Link>
        </li>
        <li className={styles.loginText}>
          <Link className={styles.foodButton} href="/signIn">
            <p className={styles.loginText}>로그인</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
