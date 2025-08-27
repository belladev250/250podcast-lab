module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // If using Next.js App Router
  ],
  theme: {
    extend: {
       colors: {
        primary: "#1E3A8A",   
        secondary: "#F59E0B",
        accent: "#10B981", 
      },
    },
  },
  plugins: [],
}
