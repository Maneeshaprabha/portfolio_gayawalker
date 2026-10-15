import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tailwind වල සාමාන්‍ය green පාට ඔයාගේ පාටින් Replace කරනවා
        green: {
          400: '#10B981', // Gradient වලට පාවිච්චි කරන්න ටිකක් ලා පාටක් (Light)
          500: '#0BB671', // ඔයාගේ ප්‍රධාන පාට (Main Color)
          600: '#089159', // ටිකක් තද පාටක් (Dark)
          800: '#04472c', // Background Glowing effect වලට
          900: '#022416', // Background Glowing effect වලට
        }
      },
    },
  },
  plugins: [],
};
export default config;