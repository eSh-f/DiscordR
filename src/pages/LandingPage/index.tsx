import React from "react";
import { Header } from "../../widgets/Header";
import { Hero } from "../../modules/LandingHero";
import styles from "./styles/landing.module.scss";
import "../../app/styles/global.css";

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
};

export default LandingPage;
