import clsx from "clsx";
import styles from "./Text.module.css";

function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  //Text컴포넌트로 감싸진 내부 요소들이 children으로 들어온다
  return <p className={clsx(styles.text, className)}>{children}</p>;
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className={styles.error}>{children}</p>;
}

export { Text, ErrorText };
