import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {

    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <Component {...pageProps} />
        </ThemeProvider >
    );
}

export default MyApp;
