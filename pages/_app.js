import { useState } from "react";
import "../styles/globals.css";
import ThemeContext from "../contexts/ThemeContext";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState("light");

    return (
        // <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider defaultTheme="system" attribute="class">
            < Component {...pageProps} />
        </ThemeProvider >
        // </ThemeContext.Provider>
    );
}

export default MyApp;
