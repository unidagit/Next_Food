import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ICategories } from "../../lib/api";
import styles from "./Button.module.css";

function Button({
  children,
  onClick,
  disabled,
  className,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function ButtonLink({
  link,
  children,
  className,
}: {
  link: string;
  children?: React.ReactNode;
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

function ButtonCatgeory({
  category,
  children,
  onClickHandler,
}: {
  category: ICategories;
  children: React.ReactNode;
  onClickHandler: any;
}) {
  return (
    <>
      <button
        type="button"
        className={styles.buttonCatgeory}
        onClick={() => onClickHandler(category.strCategory)}
      >
        {children}
      </button>
    </>
  );
}

export { Button, ButtonLink, ButtonCatgeory };
