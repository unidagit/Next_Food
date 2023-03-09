"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Light from "../../images/light.svg";
import Dark from "../../images/dark.svg";
import { useEffect } from "react";
import styles from "./ThemeModeButton.module.css";

function ThemeModeButton() {
  const { theme, setTheme } = useTheme();

  const themeModeHandle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "dark") {
      return setTheme("dark");
    } else {
      return setTheme("light");
    }
  }, [setTheme]);

  return (
    <>
      <button className={styles.button} onClick={themeModeHandle}>
        {theme === "light" ? (
          <Image src={Dark} alt="a" width={24} />
        ) : (
          <Image src={Light} alt="a" width={24} />
        )}
      </button>
    </>
  );
}

export default ThemeModeButton;
