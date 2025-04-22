import { plugin } from 'postcss'

/** @type {import('tailwindcss').Config} */
const flowbite=require("flowbite-react/tailwind")
export default {
  content: ["./index.html","src/**/*.{js,ts,jsx,tsx},flowbite.content"],
  theme: {
    extend: {},
    gridTemplateColumns:{
      'auto':'repeat(auto-fill,minmax(200px,1fr))'
    }
  },
  plugins: [flowbite,plugin()],
}

