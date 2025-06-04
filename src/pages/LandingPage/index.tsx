import React from "react";
import { Header } from "../../widgets/Header";
import { Hero } from "../../modules/LandingHero";
import styles from "./styles/landing.module.scss";
import "../../app/styles/global.css";
import LandingSectionList from "../../modules/LandingSection/ui/LandingSectionList";
import { Ticker } from "@/modules/LandingTicker";

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <LandingSectionList />
      </main>
    </div>
  );
};

export default LandingPage;
