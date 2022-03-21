import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import DevProcess from "../components/DevProcess";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Welcome />
            <About />
            <DevProcess />
            <Footer/>
        </div>
    );
}
