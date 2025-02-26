import type { Config } from "tailwindcss";

export default {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				wiggleHard: {
					"0%, 100%": { transform: "rotate(-10deg)" },
					"50%": { transform: "rotate(10deg)" },
				},
				grow: {
					"100%": { transform: "scale-y: 100" },
				},
				oscillate: {
					"0%": { scale: "1.2" },
					"100%": { scale: "1" },
				},
			},
			animation: {
				wiggle: "wiggle 200ms ease-in-out ",
				wiggleHard: "wiggleHard 400ms ease-in-out",
				grow: "grow 200ms linear",
				oscillate: "oscillate 1000ms infinite",
				bounce: "small_bounce 1000ms ease-in-out",
				fade_in: "fade_in 1000ms linear",
				dissappear_on_enter: "dissappear_on_enter 1100ms linear",
			},
			fontFamily: {
				title: "var(--font-title)",
				body: "var(--font-body)",
				highlights: "var(--font-highlights)",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"background-menu": "var(--background-menu)",
				"rc-yellow": "var(--yellow-h)",
				"rc-green": "var(--green-h)",
				"rc-blue": "var(--blue-h)",
				"rc-red": "var(--red-h)",
			},
		},
	},
	plugins: [],
} satisfies Config;
