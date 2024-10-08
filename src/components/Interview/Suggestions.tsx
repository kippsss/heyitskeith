import React from "react";
import styles from "./Suggestions.module.css";

interface Props {
  addToConversation: Function;
}

const suggestions = [
  {
    header: "My work experiences",
    subheader: "Tell me about your previous work experiences",
  },
  {
    header: "Skills that I have picked up",
    subheader:
      "Elaborate on skills you have learnt from your work and academic experiences",
  },
  {
    header: "How I qualify for the applied role",
    subheader: "Why do you think you qualify for this role?",
  },
  {
    header: "Just for fun",
    subheader: "Sing me a song!",
  },
];

function Suggestions({ addToConversation }: Props) {
  return (
    <div className={styles.suggestionsContainer}>
      <div className={styles.suggestionsRow}>
        {suggestions.slice(0, 2).map(({ header, subheader }) => {
          return (
            <button
              key={header}
              onClick={() => addToConversation({ user: subheader })}
              className={styles.suggestionButton}
            >
              <span className={styles.suggestionHeader}>{header}</span>
              <span className={styles.suggestionSubheader}>{subheader}</span>
            </button>
          );
        })}
      </div>
      <div className={styles.suggestionsRow}>
        {suggestions.slice(2, 4).map(({ header, subheader }) => {
          return (
            <button
              key={header}
              onClick={() => addToConversation({ user: subheader })}
              className={styles.suggestionButton}
            >
              <span className={styles.suggestionHeader}>{header}</span>
              <span className={styles.suggestionSubheader}>{subheader}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestions;
