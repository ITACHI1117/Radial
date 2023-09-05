import Image from "next/image";
import styles from "./page.module.css";

import Careers from "./components/Careers";
import Nav from "./components/Nav";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Header />
    </main>
  );
}
