"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState, useCallback, ChangeEvent, useEffect } from "react";
import { Button } from "../../components/buttons/Button";
import Wrapper from "../../components/common/wrapper/Wrapper";
import Input from "../../components/input/Input";
import { ErrorText, LabelText, TitleText } from "../../components/text/Text";
import useInput from "../../hooks/useInput/useInput";
import {
  IuserInterface,
  postAccountNameValid,
  postEmailValid,
  postJoinForm,
} from "../../lib/api";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  const router = useRouter();

  const [email, onChangeEmail] = useInput("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isCheckedEmail, setIsCheckedEmail] = useState("");
  const [isDuplicatedEmail, setIsDuplicatedEmail] = useState(false);

  const [accountname, onChangeAccountname] = useInput("");
  const [accountnameErrorMessage, setAccountnameErrorMessage] = useState("");
  const [isValidatedAccountname, setIsValidatedAccountname] = useState(false);
  const [isCheckedAccountname, setIsCheckedAccountname] = useState("");
  const [isDuplicatedAccountname, setIsDuplicatedAccountname] = useState(false);

  const [username, onChangeUsername] = useInput("");

  const [password, onChangePassWord] = useInput("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isValidatedCheckPassword, setIsValidatedCheckPassword] =
    useState(false);

  //유효성 검사 완료후 다음으로 넘어가기
  const passed =
    isValidatedEmail &&
    isValidatedAccountname &&
    isValidatedPassword &&
    isValidatedCheckPassword &&
    isDuplicatedEmail &&
    isDuplicatedAccountname;

  //중복 이메일 검사
  const { mutate: emailCheckData } = useMutation((email: string) =>
    postEmailValid(email)
  );

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

      emailCheckData(email, {
        onSuccess: (data) => {
          if (data.message === "이미 가입된 이메일 주소 입니다.") {
            setIsCheckedEmail("이미 가입된 이메일 주소 입니다.");
          } else if (data.message === "사용 가능한 이메일 입니다.") {
            setIsCheckedEmail("사용 가능한 이메일 입니다.");
            setIsDuplicatedEmail(true);
          }
        },
        onError: (error) => {
          console.log(error); //404페이지 나중에 띄우기
        },
      });
    }
  }, [email, emailCheckData]);

  //중복 닉네임 검사
  const { mutate: accountnameCheckData } = useMutation((accountname: string) =>
    postAccountNameValid(accountname)
  );

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

      accountnameCheckData(accountname, {
        onSuccess: (data) => {
          if (data.message === "이미 가입된 계정ID 입니다.") {
            setIsCheckedAccountname("이미 가입된 계정ID 입니다.");
          } else if (data.message === "사용 가능한 계정ID 입니다.") {
            setIsCheckedAccountname("사용 가능한 계정ID 입니다.");
            setIsDuplicatedAccountname(true);
          }
        },
        onError: (error) => {
          console.log(error); //404페이지 나중에 띄우기
        },
      });
    }
  }, [accountname, accountnameCheckData]);

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
      if (password === e.target.value) {
        setPasswordError(false);
        setIsValidatedCheckPassword(true);
      } else {
        setPasswordError(true);
        setIsValidatedCheckPassword(false);
      }
    },
    [password]
  );

  // 폼 모든 데이터 담고 회원가입 전송
  const { mutate: joinFormData } = useMutation((user: IuserInterface) =>
    postJoinForm(user)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user: IuserInterface = {
      email,
      accountname,
      password,
      username,
    };
    joinFormData(user, {
      onSuccess: (data) => {
        router.push("/signIn");
      },
      onError: (error) => {
        console.log(error); //404페이지 나중에 띄우기
      },
    });
  };

  return (
    <Wrapper>
      <div className={styles.formWrapper}>
        <TitleText>회원가입</TitleText>
        <form className={styles.formBox} onSubmit={handleSubmit}>
          <div>
            <LabelText htmlFor="userEmail">이메일</LabelText>
            <div className={styles.duplicationBox}>
              <Input
                name="userEmail"
                value={email}
                placeholder="이메일을 입력해주세요"
                onChange={onChangeEmail}
              />
            </div>
            <ErrorText>{emailErrorMessage}</ErrorText>
            <ErrorText>{isCheckedEmail}</ErrorText>
          </div>

          <div>
            <LabelText htmlFor="userName">이름</LabelText>
            <Input
              name="userName"
              value={username}
              placeholder="이름을 입력해주세요"
              onChange={onChangeUsername}
            />
          </div>

          <div>
            <LabelText htmlFor="accountname">닉네임</LabelText>
            <div className={styles.duplicationBox}>
              <Input
                name="accountname"
                value={accountname}
                placeholder="닉네임을 입력해주세요"
                onChange={onChangeAccountname}
              />
            </div>
            <ErrorText>{accountnameErrorMessage}</ErrorText>
            <ErrorText>{isCheckedAccountname}</ErrorText>
          </div>

          <div>
            <LabelText htmlFor="userPassword">비밀번호</LabelText>
            <Input
              name="userPassword"
              value={password}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChangePassWord}
            />
            <ErrorText>{passwordErrorMessage}</ErrorText>
          </div>

          <div>
            <LabelText htmlFor="userPasswordCheck">비밀번호 확인</LabelText>
            <Input
              name="userPasswordCheck"
              value={passwordCheck}
              type="password"
              placeholder="비밀번호를 다시 한번 입력해주세요"
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
            )}
          </div>
          <div className={styles.saveBox}>
            <Button disabled={passed ? false : true}>회원가입</Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default SignUpForm;
