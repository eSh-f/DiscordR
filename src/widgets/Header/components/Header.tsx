import React from "react";
import styles from "../styles/header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Ruscord</div>
      <button className={styles.loginButton}>Log In</button>
    </header>
  );
};
