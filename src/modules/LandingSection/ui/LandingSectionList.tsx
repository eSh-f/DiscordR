import React from "react";
import { landingSections } from "@/modules/LandingSection/model/data";
import { LandingSection } from "@/modules/LandingSection";
import { Ticker } from "@/modules/LandingTicker";

const LandingSectionList = () => {
  return (
    <>
      {landingSections.map((section, i) => (
        <React.Fragment key={i}>
          <LandingSection
            title={section.title}
            text={section.text}
            image={section.image}
            variant={section.variant}
          />
          {i === 0 && <Ticker />}
        </React.Fragment>
      ))}
    </>
  );
};

export default LandingSectionList;
