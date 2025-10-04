"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords(prev => {
        if (prev.length >= wordsArray.length) {
          clearInterval(timer);
          return prev;
        }
        return [...prev, prev.length];
      });
    }, duration * 1000);

    return () => clearInterval(timer);
  }, [wordsArray.length, duration]);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          const isVisible = visibleWords.includes(idx);
          return (
            <span
              key={word + idx}
              className={`transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 blur-0' 
                  : 'opacity-0 blur-sm'
              }`}
              style={{
                filter: filter && !isVisible ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-enerpy-gray text-xl leading-relaxed">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
