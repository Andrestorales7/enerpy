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
    "rgb(15 23 42)", // slate-900
    "rgb(0 0 0)", // black
    "rgb(23 23 23)", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(6 182 212), rgb(16 185 129))", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, rgb(236 72 153), rgb(99 102 241))", // pink-500 to indigo-500
    "linear-gradient(to bottom right, rgb(249 115 22), rgb(234 179 8))", // orange-500 to yellow-500
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
