import React from "react";
import Section from "../common/Section";
import { SKILLS } from "./constants";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <Section header="what i've learnt">
      <div className={styles.skillsContainer}>
        {SKILLS.map((item) => {
          return (
            <div key={item.skill} className={styles.skillContainer}>
              <span className={styles.skillText}>{item.skill}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
