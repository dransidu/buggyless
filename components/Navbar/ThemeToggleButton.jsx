import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useState, useEffect, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

export default function ThemeToggleButton() {
    const [isDarkMode, setDarkMode] = useState(false);
    const { setTheme } = useContext(ThemeContext);

    useEffect(() => {
        // Adding and remove dark class in main body tag
        isDarkMode == true
            ? document.body.parentElement.classList.add("dark")
            : document.body.parentElement.classList.remove("dark");
    });

    const setMode = () => {
        // Change Theme state
        setDarkMode(isDarkMode ? false : true);
        // Change ThemeContext
        setTheme(isDarkMode ? "light" : "dark");
    };

    return (
        <div className="theme">
            <button onClick={() => setMode()}>
                {/* Change Toggle Icon */}
                {isDarkMode == true ? (
                    // When theme dark
                    <MoonIcon className="w-6 h-6 text-gray-100" />
                ) : (
                    // when theme light
                    <SunIcon className="w-6 h-6 " />
                )}
            </button>
        </div>
    );
}
