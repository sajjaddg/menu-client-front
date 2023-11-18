/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F3A41',
          2: '#525F67',
          3: '#BFC1C2'
        }
      },
      fontFamily: {
        Shbnam: ['shbnam'],
        Shbnam_medium: ['shbnam-medium'],
        Shbnam_Bold: ['shbnam-bold']
      },
    },
  },
  plugins: [],
})