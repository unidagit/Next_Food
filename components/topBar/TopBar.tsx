"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { isUserAccountAtom, isUserTokenAtom } from "../../provider/atom";
import styles from "./TopBar.module.css";

function TopBar() {
  const router = useRouter();
  const [userToken, setUserToken] = useState<string | null>(null);
  const [token, setToken] = useRecoilState(isUserTokenAtom);
  const [account, setAccount] = useRecoilState(isUserAccountAtom);
  const usertoken = useRecoilValueLoadable(isUserTokenAtom);

  useEffect(() => {
    const token = localStorage.getItem("token_");
    setUserToken(token); //추가
  }, [userToken]);

  const logoutClick = () => {
    localStorage.removeItem("token_");
    localStorage.removeItem("account");
    setToken("");
    setAccount("");
    router.push("/signIn");
  };

  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        {userToken ? (
          <>
            <li className={styles.loginText}>
              <Link href="/signIn">
                <div className={styles.loginText} onClick={logoutClick}>
                  로그아웃
                </div>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/signUp">
                <p className={styles.joinText}>회원가입</p>
              </Link>
            </li>
            <li className={styles.loginText}>
              <Link href="/signIn">
                <p className={styles.loginText}>로그인</p>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default TopBar;
