import React from "react";
import styles from "../styles/section.module.scss";

const LandingSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h2>Трансляция</h2>
            <p>
              Путиин и Зеленский решили уладить конфликт в чемпионате по Dota 2.
              Эксклюзивно только в Ruscord!
            </p>
          </div>
          <div className={styles.contentMedia}>
            <img src="" alt="meadia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
