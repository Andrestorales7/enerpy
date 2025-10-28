import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		fontFamily: {
			sans: ['Comfortaa', 'sans-serif'],
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					background: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enerpy specific colors
				enerpy: {
					'primary': '#1E8449',
					'light': '#7DCEA0',
					'dark': '#0B5345',
					'gray': '#333333',
					'accent': '#F1C40F',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)',
						filter: 'brightness(1)',
					},
					'50%': { 
						opacity: '0.85',
						transform: 'scale(1.05)',
						filter: 'brightness(1.15)',
					},
				},
				'rotate-glow': {
					'0%': { 
						transform: 'rotate(0deg)',
						filter: 'hue-rotate(0deg) brightness(1)',
					},
					'50%': {
						filter: 'hue-rotate(180deg) brightness(1.2)',
					},
					'100%': { 
						transform: 'rotate(360deg)',
						filter: 'hue-rotate(360deg) brightness(1)',
					},
				},
				'circle-loader': {
					'0%': {
						'stroke-dasharray': '0, 360',
						'stroke-dashoffset': '0',
					},
					'50%': {
						'stroke-dasharray': '360, 360',
						'stroke-dashoffset': '-180',
					},
					'100%': {
						'stroke-dasharray': '360, 360',
						'stroke-dashoffset': '-360',
					},
				},
				'tech-blur': {
					'0%, 100%': { 
						filter: 'blur(0px) brightness(1)',
					},
					'50%': { 
						filter: 'blur(1px) brightness(1.2)',
					},
				},
				'morph-shape': {
					'0%, 100%': { 
						'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%',
					},
					'50%': { 
						'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%',
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'zoom-in': 'zoom-in 0.5s ease-out',
				'spin-slow': 'spin 15s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-glow': 'rotate-glow 8s linear infinite',
				'circle-loader': 'circle-loader 2s ease-in-out infinite',
				'tech-blur': 'tech-blur 5s ease-in-out infinite',
				'morph-shape': 'morph-shape 8s ease-in-out infinite',
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/co2hero.jpg')",
				'reactor-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('/images/reactor2.jpg')",
			},
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
