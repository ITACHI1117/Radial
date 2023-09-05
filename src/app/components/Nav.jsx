import React from "react";
import Image from "next/image";
import styles from "../../styles/Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <Image
        className={styles.nav_img}
        src="/Radial-bpost-Group-logo-social.png"
        width={200}
        height={120}
        alt="radial logo"
      />
      <button className={styles.nav_button}>Contact Us</button>
    </div>
  );
}

export default Nav;
