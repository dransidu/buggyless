import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useState, useEffect, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

export default function ThemeToggleButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        // Adding and remove dark class in main body tag
        theme == "dark"
            ? document.body.parentElement.classList.add("dark")
            : document.body.parentElement.classList.remove("dark");
    });

    const setMode = () => {
        // Change ThemeContext
        setTheme(theme == "dark" ? "light" : "dark");
    };

    return (
        <div className="theme">
            <button onClick={() => setMode()}>
                {/* Change Toggle Icon */}
                {theme == "dark" ? (
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
