import React from "react";
import styles from "../styles/hero.module.scss";
import heroImage from "../assets/imageHero.png";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1>
            ЧАТ ГРУППЫ,
            <br />
            ГДЕ ВСЕГДА ВЕСЕЛО
          </h1>
          <p>
            Ruscord — отличное место, чтобы встретиться с друзьями или создать
            глобальное сообщество. Организуйте собственное пространство для
            бесед, <br />
            игр и хобби.
          </p>
        </div>
        <div className={styles.contentImage}>
          <img src={heroImage} alt="logo" />
        </div>
      </div>
      <button>Открыть Ruscord в браузере</button>
    </div>
  );
};
