import React, { useState, useEffect } from "react";

const TypingLocations = ({ words = [], speed = 100, pause = 1200 }) => {
  const [index, setIndex] = useState(0); // palabra actual
  const [subIndex, setSubIndex] = useState(0); // letra actual
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    // si está escribiendo
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    // si está eliminando
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
      {words[index].substring(0, subIndex)}
      <span className="border-r-2 border-white ml-1 animate-pulse"></span>
    </h2>
  );
};

export default TypingLocations;
