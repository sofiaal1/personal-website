import "../App.css";
import { useState, useEffect } from "react";

const HeroHeading = () => {
  const fullText = "Hi, I'm Sofia!";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId: any;

    const typeNext = () => {
      setDisplayedText(fullText.slice(0, i + 1));
      i += 1;

      if (i < fullText.length) {
        // Slight randomness to make it feel more "human"
        const delay = 90 + Math.random() * 80; // ~90–170ms
        timeoutId = setTimeout(typeNext, delay);
      }
    };

    // small initial delay before typing starts
    timeoutId = setTimeout(typeNext, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <h1 className="Hero-heading">
      <span className="Hero-highlight">{displayedText}</span>
    </h1>
  );
};

export default HeroHeading;
