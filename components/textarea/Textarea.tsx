import React from "react";
import styles from "./Textarea.module.css";

function Textarea({ name, minLength, placeholder, onChange, value }: any) {
  return (
    <>
      <label htmlFor={name} className={styles.labelText}></label>
      <textarea
        className={styles.textarea}
        value={value}
        name={name}
        minLength={minLength}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </>
  );
}

export default Textarea;
