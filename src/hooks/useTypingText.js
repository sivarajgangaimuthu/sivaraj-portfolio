import { useEffect, useState } from "react";

export function useTypingText(words, speed = 72, pause = 1200) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const doneTyping = letterIndex === current.length;
    const doneDeleting = letterIndex === 0 && deleting;

    const delay = doneTyping && !deleting ? pause : deleting ? speed / 2 : speed;

    const timer = window.setTimeout(() => {
      if (doneTyping && !deleting) {
        setDeleting(true);
        return;
      }

      if (doneDeleting) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setLetterIndex((index) => index + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, letterIndex, pause, speed, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}
