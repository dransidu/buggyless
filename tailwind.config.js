module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#06f",
                secondary: "#022144",
            },
            lineHeight: {
                idleSize: "70px",
            },
        },
    },
    plugins: [],
};
