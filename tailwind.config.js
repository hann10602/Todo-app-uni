/** @type {import('tailwindcss').Config} */
module.exports = {
	//jit mode
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],

	// affected files
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
		// config own styles
      spacing: {
        '52c': '52px',
        '136c': '136px',
        '424c': '424px',
      }
    },
    plugins: [],
  }
}