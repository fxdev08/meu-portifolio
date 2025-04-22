
import React, { useState, useEffect } from 'react';

interface CodeAnimationProps {
  lines: string[];
  delay?: number;
  className?: string;
}

const CodeAnimation: React.FC<CodeAnimationProps> = ({
  lines,
  delay = 1000,
  className = '',
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Initialize animation after initial delay
    const initialTimeout = setTimeout(() => {
      setCurrentLine(0);
    }, delay);

    return () => clearTimeout(initialTimeout);
  }, [delay]);

  useEffect(() => {
    if (currentLine < lines.length && !typingComplete) {
      const lineTimeout = setTimeout(() => {
        setCurrentLine(prevLine => prevLine + 1);
        if (currentLine === lines.length - 1) {
          setTypingComplete(true);
        }
      }, 1200 + Math.random() * 800); // Vary the typing speed

      return () => clearTimeout(lineTimeout);
    }
  }, [currentLine, lines.length, typingComplete]);

  // Reset the animation after completion
  useEffect(() => {
    if (typingComplete) {
      const resetTimeout = setTimeout(() => {
        setCurrentLine(0);
        setTypingComplete(false);
      }, 5000); // Pause before restarting

      return () => clearTimeout(resetTimeout);
    }
  }, [typingComplete]);

  const syntaxHighlight = (code: string) => {
    // Simple syntax highlighting
    return code
      .replace(/(const|let|var|function|return|if|else|for|while)/g, '<span class="text-code-purple">$1</span>')
      .replace(/(".*?")/g, '<span class="text-code-green">$1</span>')
      .replace(/('.*?')/g, '<span class="text-code-green">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-code-blue">$1</span>')
      .replace(/(\{|\}|\(|\)|\[|\]|;|,|\.|=|>|<|\+|-|\*|\/|:|&|\||\?|!|%)/g, '<span class="text-code-orange">$1</span>');
  };

  return (
    <pre className={`bg-[#1E1E2E] rounded-lg p-4 text-sm md:text-base font-code overflow-hidden ${className}`}>
      <code className="text-white">
        {lines.slice(0, currentLine).map((line, index) => (
          <div key={index} className="code-snippet">
            <span 
              dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) }} 
              className={`typing ${index === currentLine - 1 ? 'animate-code-typing' : 'w-full'}`}
            />
          </div>
        ))}
      </code>
    </pre>
  );
};

export default CodeAnimation;
