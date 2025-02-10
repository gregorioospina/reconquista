import type { Config } from "tailwindcss";

export default {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
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
