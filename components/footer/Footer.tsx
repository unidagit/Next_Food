import Image from "next/image";
import React from "react";
import Logo from "../../images/logo.png";
import Text from "../text/Text";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={Logo} alt="MyFood-Logo" width={60} />
      <Text>완벽한 레시피</Text>
    </footer>
  );
}

export default Footer;
