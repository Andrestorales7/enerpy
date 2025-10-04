"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollProgress = scrollTop / scrollHeight;
      
      const cardIndex = Math.floor(scrollProgress * content.length);
      const clampedIndex = Math.min(Math.max(cardIndex, 0), content.length - 1);
      
      setActiveCard(clampedIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [content.length]);

  const backgroundColors = [
    "rgb(34 197 94)", // green-500
    "rgb(22 163 74)", // green-600
    "rgb(21 128 61)", // green-700
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(16 185 129), rgb(34 197 94))", // emerald-500 to green-500
    "linear-gradient(to bottom right, rgb(34 197 94), rgb(22 163 74))", // green-500 to green-600
    "linear-gradient(to bottom right, rgb(22 163 74), rgb(21 128 61))", // green-600 to green-700
  ];

  const currentBackground = backgroundColors[activeCard % backgroundColors.length];
  const currentGradient = linearGradients[activeCard % linearGradients.length];

  return (
    <div
      style={{ backgroundColor: currentBackground }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 transition-colors duration-500"
      ref={containerRef}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <h2
                className={`text-2xl font-bold text-slate-100 transition-opacity duration-300 ${
                  activeCard === index ? 'opacity-100' : 'opacity-30'
                }`}
              >
                {item.title}
              </h2>
              <p
                className={`text-lg text-slate-300 max-w-sm mt-10 transition-opacity duration-300 ${
                  activeCard === index ? 'opacity-100' : 'opacity-30'
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: currentGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden transition-all duration-500",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </div>
  );
};
