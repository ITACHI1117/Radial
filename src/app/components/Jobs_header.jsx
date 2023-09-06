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
          <li>
            Are you must be a U.S. Citizen or Canadian Citizen Green - Card
            Holder
          </li>
          <li>Must be fluent in communication and English</li>
          <li>Must be at least 30wpm average</li>
          <li>Must be 18+ average.....</li>
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
