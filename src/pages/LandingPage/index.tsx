import React from "react";
import { Header } from "../../widgets/Header";
import { Hero } from "../../modules/LandingHero";
import styles from "./styles/landing.module.scss";
import "../../app/styles/global.css";
import { LandingSection } from "../../modules/LandingSection/index";

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <LandingSection />
      </main>
    </div>
  );
};

export default LandingPage;
