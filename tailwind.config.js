/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mlColor: "Rgba(254 241 114)",
                lupa: "#666",
                borderColor: "#2968c2",
                bgMain: "#ededed",
                letterColor: "#333",
                envioGratis: "#00A650",
            },
        },
    },
    plugins: [],
};
