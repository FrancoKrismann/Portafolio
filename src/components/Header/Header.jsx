import React from "react";
import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div className={styles.container}>
      <Navbar/>
    </div>
  );
}
