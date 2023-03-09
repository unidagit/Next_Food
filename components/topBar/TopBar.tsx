import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import { isUserTokenAtom } from "../../provider/atom";
import styles from "./TopBar.module.css";

function TopBar() {
  const router = useRouter();
  const [token, setToken] = useRecoilState(isUserTokenAtom);
  const usertoken = useRecoilValue(isUserTokenAtom);

  const logoutClick = () => {
    setToken("");
    router.push("/signIn");
  };

  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        {usertoken ? (
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
