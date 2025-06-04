import React, { FC } from "react";
import classNames from "classnames";
import styles from "../styles/section.module.scss";
import { ILandingSectionProps } from "@/modules/LandingSection/model/types";

export const LandingSection: FC<ILandingSectionProps> = ({
  title,
  text,
  image,
  variant = "default",
}) => {
  return (
    <div className={styles.section}>
      <div
        className={classNames(styles.wrapper, {
          [styles.defaultWrapper]: variant === "default",
          [styles.thematicWrapper]: variant === "thematic",
        })}
      >
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className={styles.contentMedia}>
            <img src={image} alt="meadia" />
          </div>
        </div>
      </div>
    </div>
  );
};
