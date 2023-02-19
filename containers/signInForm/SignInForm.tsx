"use client";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ErrorText } from "../../components/text/Text";
import useInput from "../../hooks/useInput/useInput";
import { IuserInterface, postLoginForm } from "../../lib/api";
import { isUserAtom } from "../../provider/atom";
import styles from "./SignInForm.module.css";

function SignInForm() {
  const [token, setToken] = useRecoilState(isUserAtom);

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const [email, onChangeEmail] = useInput("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isCheckedEmail, setIsCheckedEmail] = useState("");

  const [password, onChangePassword] = useInput("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);

  //이메일 유효성검사
  useEffect(() => {
    const regexEmail =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!regexEmail.test(email) && email !== "") {
      setIsValidatedEmail(false);
      setEmailErrorMessage("올바른 이메일 형식이 아닙니다");
      setIsCheckedEmail("");
    } else if (email === "") {
      setIsValidatedEmail(false);
      setEmailErrorMessage("");
      setIsCheckedEmail("");
    } else {
      setIsValidatedEmail(true);
      setEmailErrorMessage("");
      setIsCheckedEmail("");
    }
  }, [email]);

  //비밀번호 유효성 검사
  useEffect(() => {
    if (password.length < 6 && password !== "") {
      setIsValidatedPassword(false);
      setPasswordErrorMessage("비밀번호는 6자리 이상이어야 합니다.");
    } else if (password === "") {
      setIsValidatedPassword(false);
      setPasswordErrorMessage("");
    } else {
      setIsValidatedPassword(true);
      setPasswordErrorMessage("");
    }
  }, [password]);

  const { mutate: loginFormData } = useMutation((user: IuserInterface) =>
    postLoginForm(user)
  );

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const user: IuserInterface = {
      email,
      password,
    };
    loginFormData(user, {
      onSuccess: (data) => {
        console.log(data);
        if (data.message === "이메일 또는 비밀번호가 일치하지 않습니다.") {
          setErrorMessage("이메일 또는 비밀번호가 일치하지 않습니다.");
        } else {
          localStorage.setItem("account", data.user.accountname);
          localStorage.setItem("token_", data.user.token);

          setToken(data.user.token); //로그인했을때 아톰에 넣음

          router.push("/");
        }
      },
      onError: (error) => {
        console.log(error); //404페이지 나중에 띄우기
      },
    });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <div>
          <label htmlFor="email">이메일</label>
          <br />
          <input name="email" value={email} onChange={onChangeEmail} required />
          <ErrorText>{emailErrorMessage}</ErrorText>
        </div>

        <div>
          <label htmlFor="userPassword">비밀번호</label>
          <br />
          <input
            name="userPassword"
            value={password}
            type="password"
            onChange={onChangePassword}
            required
          />
          <ErrorText>{errorMessage}</ErrorText>
        </div>
        <div>
          <button type="submit">로그인</button>
          <Link href="/signUp">회원가입</Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
