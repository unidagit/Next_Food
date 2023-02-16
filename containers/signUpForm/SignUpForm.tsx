"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState, useCallback, ChangeEvent, useEffect } from "react";
import useInput from "../../hooks/useInput/useInput";
import {
  IuserInterface,
  postAccountNameValid,
  postEmailValid,
  postJoinForm,
} from "../../lib/api";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  const [email, onChangeEmail] = useInput("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isCheckedEmail, setIsCheckedEmail] = useState("");

  const [accountname, onChangeAccountname] = useInput("");
  const [accountnameErrorMessage, setAccountnameErrorMessage] = useState("");
  const [isValidatedAccountname, setIsValidatedAccountname] = useState(false);
  const [isCheckedAccountname, setIsCheckedAccountname] = useState("");

  const [username, onChangeUsername] = useInput("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [isValidatedUsername, setIsValidatedUsername] = useState(false);

  const [password, onChangePassWord] = useInput("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

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

  //유저네임 유효성 검사
  useEffect(() => {
    if (
      (accountname.length < 2 && accountname !== "") ||
      accountname.length > 10
    ) {
      setIsValidatedAccountname(false);
      setAccountnameErrorMessage("2자 ~ 10자 이내여야 합니다.");
      setIsCheckedAccountname("");
    } else if (accountname === "") {
      setIsValidatedAccountname(false);
      setAccountnameErrorMessage("");
      setIsCheckedAccountname("");
    } else {
      setIsValidatedAccountname(true);
      setAccountnameErrorMessage("");
      setIsCheckedAccountname("");
    }
  }, [accountname]);

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

  //비밀번호 다시 확인 체크
  const onChangePasswordCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  //중복 이메일 검사
  const { mutate: emailCheckData } = useMutation((email: string) =>
    postEmailValid(email)
  );

  const handleEmailCheck = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    emailCheckData(email, {
      onSuccess: (data) => {
        if (data.message === "이미 가입된 이메일 주소 입니다.") {
          setIsCheckedEmail("이미 가입된 이메일 주소 입니다.");
        } else if (data.message === "사용 가능한 이메일 입니다.") {
          setIsCheckedEmail("사용 가능한 이메일 입니다.");
        }
      },
      onError: (error) => {
        console.log(error); //404페이지 나중에 띄우기
      },
    });
  };

  //중복 닉네임 검사
  const { mutate: accountnameCheckData } = useMutation((accountname: string) =>
    postAccountNameValid(accountname)
  );

  const handleAccountnameCheck = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    accountnameCheckData(accountname, {
      onSuccess: (data) => {
        if (data.message === "이미 가입된 계정ID 입니다.") {
          setIsCheckedAccountname("이미 가입된 계정ID 입니다.");
        } else if (data.message === "사용 가능한 계정ID 입니다.") {
          setIsCheckedAccountname("사용 가능한 계정ID 입니다.");
        }
      },
      onError: (error) => {
        console.log(error); //404페이지 나중에 띄우기
      },
    });
  };

  // 폼 모든 데이터 담고 회원가입 전송
  const { mutate: joinFormData } = useMutation((user: IuserInterface) =>
    postJoinForm(user)
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const user: IuserInterface = {
      email,
      accountname,
      password,
      username,
    };
    joinFormData(user, {
      onSuccess: (data) => {
        console.log(data.message);
      },
    });
    console.log(user);
  };

  return (
    <div>
      <div>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userEmail">이메일</label>
            <input
              name="userEmail"
              value={email}
              placeholder="Email"
              required
              onChange={onChangeEmail}
            />
            <button onClick={(e) => handleEmailCheck(e)}>중복확인</button>
            <p className={styles.error}>{emailErrorMessage}</p>
            <p className={styles.error}>{isCheckedEmail}</p>
          </div>

          <div>
            <label htmlFor="username">사용자 이름</label>
            <input
              name="username"
              value={username}
              required
              onChange={onChangeUsername}
            />
          </div>

          <div>
            <label htmlFor="accountname">닉네임</label>
            <input
              name="accountname"
              value={accountname}
              required
              onChange={onChangeAccountname}
            />
            <button onClick={(e) => handleAccountnameCheck(e)}>중복확인</button>
            <p className={styles.error}>{accountnameErrorMessage}</p>
            <p className={styles.error}>{isCheckedAccountname}</p>
          </div>

          <div>
            <label htmlFor="userPassword">비밀번호</label>
            <input
              name="userPassword"
              value={password}
              type="password"
              required
              onChange={onChangePassWord}
            />
            <p className={styles.error}>{passwordErrorMessage}</p>
          </div>

          <div>
            <label htmlFor="userPasswordCheck">비밀번호 확인</label>
            <input
              name="userPassword"
              value={passwordCheck}
              type="password"
              required
              onChange={onChangePasswordCheck}
            />
          </div>

          {passwordError && (
            <p className={styles.error}>비밀번호가 일치하지 않습니다.</p>
          )}
          <button>회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
