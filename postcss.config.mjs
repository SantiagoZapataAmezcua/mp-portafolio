// postcss.config.mjs
export default {
  plugins: {
    // Aquí el plugin oficial de Tailwind para PostCSS v4
    "@tailwindcss/postcss": {},
    // Y luego autoprefixer para los vendor prefixes
    autoprefixer: {},
  },
};
