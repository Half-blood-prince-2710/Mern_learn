/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      
      fontSize:{
        
        "navlintext": "clamp(1.1rem, 1.2vw , 2rem)",
        "xl": "clamp(0.8rem, 1.3vw + 1.314rem, 5.33rem)",
        "nametext": "clamp(3rem, 5vw , 7rem)",
        
      },
      },
    },

  plugins: [],
};

