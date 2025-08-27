module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // If using Next.js App Router
  ],
  theme: {
    extend: {
       colors: {

        NeonGreen:'#C3F54D',
        purple:'#9684F1',
        militaryGreen:'#1C434D',
        teal:'#1CCC8B',
        white:'#F9F9F9',
        black:'#231F20'

      
      },
    },
  },
  plugins: [],
}
