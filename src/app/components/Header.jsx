"use client";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Header.module.css";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <div className={styles.Header}>
      <div className={styles.overflow}></div>
      {/* <div className={styles.Header_img}>
        <Image
          src="/home_logo.jpg"
          width={2800}
          height={1500}
          alt="radial logo"
        />
      </div> */}
      <div className={styles.grid}>
        <div className={styles.texts}>
          <h1>Fuel the future of eCommerce</h1>
          <h3>Discover life at Radial</h3>
          <p>
            Take your career to the next level by joining our fast-growing,
            global team. At Radial you have the opportunity to explore many
            different career paths while bringing beloved brands to consumers
            through our best-in-class solutions.
          </p>
          <button
            onClick={() => router.push("jobs")}
            className={styles.header_butt}
          >
            Proceed
          </button>
        </div>
        <img
          className={styles.header_img2}
          src="/header_img.jpg"
          alt="radial logo"
        />
      </div>
    </div>
  );
}

export default Header;
