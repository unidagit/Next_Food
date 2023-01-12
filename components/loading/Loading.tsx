import React from "react";
import { FadeLoader } from "react-spinners";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <FadeLoader color="gray" height={15} width={5} />
    </div>
  );
}

export default Loading;
