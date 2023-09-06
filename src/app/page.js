import styles from "./page.module.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
