import styles from "./Text.module.css";

//error font
function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className={styles.errorText}>{children}</p>;
}

//small font
function SmallText({ children }: { children: React.ReactNode }) {
  return <p className={styles.small}>{children}</p>;
}

//title font
function TitleText({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.title}>{children}</h1>;
}

//SmallInfoText
function LabelText({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label className={styles.labelText} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

function SmallInfoText({ children }: { children: React.ReactNode }) {
  return <p className={styles.smallInfoText}>{children}</p>;
}

export { ErrorText, SmallText, LabelText, TitleText, SmallInfoText };
