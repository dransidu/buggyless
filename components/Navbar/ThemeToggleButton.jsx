import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
    const [mounted, setMounted] = useState(false)
    const {systemTheme, theme, setTheme} = useTheme()

    useEffect(() => {
        console.log(systemTheme)
        console.log(theme)
        // setTheme(systemTheme)
        setMounted(true)
    },[]);

    const setMode = () => {
        if (!mounted) return null;

        const currentTheme = theme == "system" ? systemTheme : theme;
        // setTheme(theme == "system" ? systemTheme : theme)
        if (currentTheme == "dark") {
            return (
                <SunIcon className="w-6 h-6 text-gray-100" role="button" onClick={() => setTheme("light")}/>
            )
        } else {
            return (
                <MoonIcon className="w-6 h-6 " role="button" onClick={() => setTheme("dark")}/>
            )
        }

    };

    return (
        <div className="theme flex">
            {setMode()}
        </div>
    );
}
