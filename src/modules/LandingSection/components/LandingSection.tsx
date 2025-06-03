import React, { FC } from "react";
import styles from "../styles/section.module.scss";
import gif from "../assets/putinvszel.gif";

interface LandingSectionProps {
  header: string;
  text: string;
  image: string;
}

export const LandingSection: FC<LandingSectionProps> = ({
  header,
  text,
  image,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h2>Завершение легендарного конфликта 01.08.2025</h2>
            <p>
              Путин и Зеленский решили уладить конфликт в чемпионате по Dota 2.{" "}
              <br />
              Эксклюзивно только в Ruscord!
            </p>
          </div>
          <div className={styles.contentMedia}>
            <img src={gif} alt="meadia" />
          </div>
        </div>
      </div>
    </div>
  );
};
