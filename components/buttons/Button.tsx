import clsx from "clsx";
import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

function ButtonLink({
  link = "/",
  children,
  className,
}: {
  link: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Link href={link} className={clsx(styles.buttonLink, className)}>
        {children}
      </Link>
    </>
  );
}

function Button({
  children,
  className,
  onClickHandler,
}: {
  children: React.ReactNode;
  className?: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <button
        type="button"
        className={clsx(styles.buttonLink, className)}
        onClick={onClickHandler}
      >
        {children}
      </button>
    </>
  );
}

export { ButtonLink, Button };
