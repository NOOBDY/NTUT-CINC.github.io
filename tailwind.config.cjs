/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
                mono: ['Fira Mono', 'monospace']
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
