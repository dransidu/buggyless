import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import DevProcess from "../components/DevProcess";
import Gurantee from "../components/Gurantee";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Welcome />
            <About />
            <DevProcess />
            <Gurantee />
            <Newsletter/>
            <Footer/>
        </div>
    );
}
