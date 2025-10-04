import React, { useEffect, useState } from 'react';

type GradientDotsProps = {
	/** Dot size (default: 8) */
	dotSize?: number;
	/** Spacing between dots (default: 10) */
	spacing?: number;
	/** Animation duration (default: 30) */
	duration?: number;
	/** Color cycle duration (default: 6) */
	colorCycleDuration?: number;
	/** Background color (default: 'var(--background)') */
	backgroundColor?: string;
	className?: string;
};

export function GradientDots({
	dotSize = 8,
	spacing = 10,
	duration = 30,
	colorCycleDuration = 6,
	backgroundColor = 'var(--background)',
	className = '',
}: GradientDotsProps) {
	const [animationKey, setAnimationKey] = useState(0);
	const hexSpacing = spacing * 1.732; // Hexagonal spacing calculation

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimationKey(prev => prev + 1);
		}, 100);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className={`absolute inset-0 ${className}`}
			style={{
				backgroundColor,
				backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, #3b82f6, transparent 60%),
          radial-gradient(circle at 50% 50%, #10b981, transparent 60%),
          radial-gradient(circle at 50% 50%, #f59e0b, transparent 60%),
          radial-gradient(ellipse at 50% 50%, #8b5cf6, transparent 60%),
          linear-gradient(to bottom, transparent 0%, ${backgroundColor} 20%, ${backgroundColor} 100%)
        `,
				backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px,
          100% 100%
        `,
				backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          ${(animationKey * 2) % 400}% ${(animationKey * 1.5) % 300}%,
          ${(animationKey * 1.8) % 400}% ${(animationKey * 2.2) % 300}%,
          ${(animationKey * 1.2) % 400}% ${(animationKey * 1.8) % 300}%,
          ${(animationKey * 2.5) % 400}% ${(animationKey * 1.3) % 300}%,
          0% 0%
        `,
				animation: `gradientShift ${duration}s linear infinite, colorCycle ${colorCycleDuration}s linear infinite`,
			}}
		/>
	);
}
