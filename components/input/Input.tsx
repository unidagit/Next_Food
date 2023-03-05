import React from "react";
import styles from "./Input.module.css";

function Input({
  type,
  name,
  minLength,
  maxLength,
  placeholder,
  onChange,
  value,
}: any) {
  return (
    <>
      <input
        className={styles.inputBox}
        value={value}
        type={type ? type : "text"}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </>
  );
}

export default Input;
