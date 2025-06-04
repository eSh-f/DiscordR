import React from "react";
import styles from "../styles/ticker.module.scss";

export const Ticker = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.wrapper}>
        <p>БОЛТАЙТЕ</p>
        <p>ТУСУЙТЕСЬ</p>
        <p>ОБЩАЙТЕСЬ</p>
        <p>БОЛТАЙТЕ</p>
        <p>ТУСУЙТЕСЬ</p>
        <p>ОБЩАЙТЕСЬ</p>
      </div>
    </div>
  );
};
