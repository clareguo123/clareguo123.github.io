import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  onComplete?: () => void;
  onTextUpdate?: (text: string) => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, onComplete, onTextUpdate }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        const newText = displayText + text[currentIndex];
        setDisplayText(newText);
        setCurrentIndex((prev) => prev + 1);
        if (onTextUpdate) {
          onTextUpdate(newText);
        }
      }, 50); // Adjust typing speed here

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete, onTextUpdate, displayText]);

  return <div>{displayText}</div>;
};

export default TypewriterText;