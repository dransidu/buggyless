import { useState } from "react";
import "../styles/globals.css";
import ThemeContext from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Component {...pageProps} />
        </ThemeContext.Provider>
    );
}

export default MyApp;
