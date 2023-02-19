"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Logo from "../../images/LogoOrange.svg";
import ThemeModeButton from "../themeModeButton/ThemeModeButton";
import LikeSvgComponent from "../icon/Like";
import SearchFood from "../searchFood/SearchFood";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    router.push(`/search?s=${e.target.value}`);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <li className={styles.left}>
          <Link href="/">
            <Image src={Logo} alt="logo" width={140} />
          </Link>
        </li>

        <li className={styles.center}>
          <SearchFood handleChange={handleChange} />
        </li>

        <li className={styles.right}>
          <Link className={styles.foodButton} href="/recipe">
            <p className={styles.mealsText}>Recipe</p>
          </Link>
          <Link className={styles.foodButton} href="/meals">
            <p className={styles.mealsText}>Meals</p>
          </Link>
          <Link className={styles.foodButton} href="/savedMeals">
            <LikeSvgComponent height={24} width={24} />
          </Link>
          <ThemeModeButton></ThemeModeButton>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
