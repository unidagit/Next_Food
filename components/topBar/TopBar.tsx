import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isUserAtom } from "../../provider/atom";
import styles from "./TopBar.module.css";

function TopBar() {
  const router = useRouter();
  const [userToken, setUserToken] = useState<string | null>(null);
  const [token, setToken] = useRecoilState(isUserAtom);
  const userTokenHandler = useSetRecoilState(isUserAtom);

  const logoutClick = () => {
    localStorage.removeItem("token_");
    localStorage.removeItem("account");
    userTokenHandler("");
    router.push("/signIn");
  };

  useEffect(() => {
    const localToken = localStorage.getItem("token_");
    setUserToken(localToken);
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        {token || userToken ? (
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
