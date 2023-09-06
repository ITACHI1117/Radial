"use client";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Jobs.module.css";
import { useRouter } from "next/navigation";

function Jobs_header() {
  const router = useRouter();
  return (
    <div className={styles.grid}>
      <img
        className={styles.header_img2}
        src="/require-img.jpg"
        alt="radial logo"
      />
      <div className={styles.texts}>
        <h1>Job Requirements</h1>
        <ul>
          <li>You must be a U.S. Citizen or Canadian Citizen.</li>
          <li>Green - Card Holder.</li>
          <li>You must be fluent in communicating in English.</li>
          <li>You must be at least 30wpm average.</li>
          <li>You must be 18+ (Average).</li>
        </ul>
        <button
          onClick={() => router.push("/Positions")}
          className={styles.header_butt}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default Jobs_header;
