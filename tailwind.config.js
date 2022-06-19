module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				md: "2px 2px 8px rgba(0, 0, 0, 0.2)",
				lg: "4px 4px 16px rgba(0, 0, 0, 0.2)",
			},
			borderWidth: {
				3: '3px',
			},
			colors: {
				yellow: "#FFC145",
				pink: "#D90368",
				green: "#00CC66",
				blue: "#2274A5",
				purple: "#725AC1",
				orange: "#E94F37",
				dark: "#273846",
				light: "#f0f0e7",
			},
		},
		fontFamily: {
			body: ["Helvetica", "Arial", "sans-serif"],
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
};
