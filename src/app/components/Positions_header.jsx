"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Positions.module.css";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import { MdCancel } from "react-icons/md";

function Positions_header() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const Interview_code = "6739HGF";
  const [code, setCode] = useState("");

  const get_value = (e) => {
    setCode(e.target.value);
  };
  console.log(code);

  const confirm_code = () => {
    if (code == Interview_code) {
      router.replace("https://forms.gle/srR98EZ2cP63sUT19");
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, "3000");
    }
  };

  return (
    <div className={styles.grid}>
      {show == true ? (
        <div className={styles.popUp}>
          <div className={styles.form_container}>
            <h1 onClick={() => setShow(false)} className={styles.cancel}>
              <MdCancel />
            </h1>
            {showError == true ? (
              <h3 className={styles.wrong_code}>Wrong Code</h3>
            ) : (
              ""
            )}

            <h1>Enter Interview Code</h1>
            <form action="">
              <input type="text" placeholder="Code" onChange={get_value} />
            </form>
            <button onClick={() => confirm_code()}>Submit</button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={styles.texts}>
        <h1>THE POSITIONS CURRENTLY AVAILABLE ARE</h1>

        <div className={styles.jobs_grid}>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Call Center Director manager
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Data Entry
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Sales
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Clerical Admin
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Administrative Clerk/Assistance
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Customer Service Receptionist
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Payroll Clerk
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Book keeping
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Medical Biller/Coding
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Front Desk Clerk
          </button>
          <button onClick={() => setShow(true)} className={styles.header_butt}>
            Typist Clerk
          </button>
        </div>
      </div>
      <img className={styles.header_img2} src="/woker.jpg" alt="radial logo" />
    </div>
  );
}

export default Positions_header;
