import React from "react";
import styles from "./Experience.module.css";

interface Props {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

function Experience({ title, description, startDate, endDate }: Props) {
  return (
    <div className={styles.experienceContainer}>
      <text className={styles.experienceTitle}>{title}</text>
      <text className={styles.experienceDescription}>{description}</text>
      <text className={styles.experienceDateRange}>
        {startDate} - {endDate}
      </text>
    </div>
  );
}

export default Experience;
